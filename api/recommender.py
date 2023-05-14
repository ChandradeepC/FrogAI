from abc import ABC, abstractmethod

from pathlib import Path

home = str(Path.home())
import sys
import os
import json
import math

sys.path.insert(0, "..")

import pandas as pd
import numpy as np


class Monitor:
    def __init__(
        self,
        name,
        persistence,
        response,
        contrast,
        brightness,
        volume,
        sharp,
        subpixel,
        res,
        rr,
        panel,
        size,
        cost,
        min_gpu,
        special,
        curve,
        adobe_rgb,
        hdr,
        aspect,
        reviews,
    ):
        self._name = name
        self._persistence = persistence
        self._response = response
        self._contrast = contrast
        self._brightness = brightness
        self._volume = volume
        self._sharp = sharp
        self._subpixel = subpixel
        self._res = res
        self._rr = int(rr.replace("hz", ""))
        self._panel = panel
        self._size = int(size.replace('"', ""))
        self._cost = cost
        self._min_gpu = str(min_gpu)
        self._special = special.replace(" +", ";")
        self._curve = curve
        self._adobe_rgb = adobe_rgb
        self._hdr = hdr
        self._aspect = aspect
        self._reviews = [pair.split(",") for pair in reviews.split(";")]
        self._score = 0

    # def __repr__(self):
    #     return f"Monitor(name={self._name}, motion={self._motion}, pq={self._pq}, sharp={self._sharp}, res={self._res}, rr={self._rr}hz, panel={self._panel}, size={self._size}, cost=${self._cost}, min_gpu={self._min_gpu}, special={self._special}, curve={self._curve}, adobe_rgb={self._adobe_rgb},hdr={self._hdr}, aspect={self._aspect}, reviews={self._reviews})"

    def __eq__(self, other):
        if not isinstance(other, Monitor):
            return NotImplemented
        return self._name == other._name


class Recommender(ABC):
    @abstractmethod
    def recommend(self):
        pass


class MonitorRecommender(Recommender):
    _scale_encoder = {
        "not": 0,
        "some": 0.1,
        "imp": 0.6,
        "very": 1,
        "only": 1,
        "yes": True,
        "no": False,
    }

    # TODO: merge the order lists
    _gpu_order = [
        "4090",
        "4080",
        "7900xtx",
        "7900xt",
        "3090ti",
        "6950xt",
        "4070ti",
        "6900xt",
        "3090",
        "3080ti",
        "3080_12gb",
        "6800xt",
        "3080_10gb",
        "6800",
        "3070ti",
        "6750xt",
        "3070",
        "6700xt",
        "2080ti",
        "series_x",
        "ps5",
        "3060ti",
        "2080super",
        "6700",
        "2080",
        "A770_16gb",
        "6650xt",
        "2070super",
        "A770_8gb",
        "6600xt",
        "5700xt",
        "3060",
        "VII",
        "2070",
        "6600",
        "A750",
        "1080ti",
        "2060super",
        "5700",
        "5600xt",
        "Vega64",
        "2060",
        "1080",
        "3050",
        "1070ti",
        "Vega56",
        "1660super",
        "1660ti",
        "1070",
        "1660",
        "series_s",
        "5500xt_8gb",
        "590",
        "980ti",
        "580_8gb",
        "1650super",
        "5500xt",
        "1060_6gb",
        "6500xt",
        "980",
        "1650",
        "A380",
        "570_4gb",
        "1060_3gb",
        "1650",
        "970",
        "6400",
        "780",
        "1050ti",
        "1630",
        "1050",
        "560",
        "550",
        "1030",
        "floor",
    ]

    _laptop_gpu_order = {
        "4090",
        "4080",
        "3080ti",
        "3080",
        "4070",
        "6850m",
        "3070ti",
        "6800m",
        "3070",
        "4060",
        "6800s",
        "6700m",
        "2080",
        "3060",
        "4050",
        "6700s",
        "2070",
        "6600m",
        "2060",
        "3050ti",
        "1660ti",
        "3050",
        "6500m",
        "2050",
        "1650ti",
        "1650",
    }

    def __init__(self, input=None):
        # Device
        if input is None:
            input = {}

        else:
            self._gpu = MonitorRecommender._scale_encoder[input["pcGpu"]]
            # if self._gpu == "no":
            #     self._gpu = False
            self._console = input["consoles"]
            if self._console == "no":
                self._console = False
            self._mac = MonitorRecommender._scale_encoder[input["mac"]]
            self._budget = input["budget"]

            # Mode: basic or advanced
            self._mode = input["mode"]

            # Basic uses
            self._casual = MonitorRecommender._scale_encoder[input["casual"]]
            self._comp = MonitorRecommender._scale_encoder[input["comp"]]
            self._text = MonitorRecommender._scale_encoder[input["text"]]
            self._media = MonitorRecommender._scale_encoder[input["media"]]

            # Advanced characteristics
            self._persistence = MonitorRecommender._scale_encoder[input["persistence"]]
            self._response = MonitorRecommender._scale_encoder[input["response"]]
            self._contrast = MonitorRecommender._scale_encoder[input["contrast"]]
            self._brightness = MonitorRecommender._scale_encoder[input["brightness"]]
            self._volume = MonitorRecommender._scale_encoder[input["volume"]]
            self._sharp = MonitorRecommender._scale_encoder[input["sharp"]]
            self._subpixel = MonitorRecommender._scale_encoder[input["subpixel"]]

            # Special uses
            self._edit = MonitorRecommender._scale_encoder[input["edit"]]
            self._print = MonitorRecommender._scale_encoder[input["print"]]
            self._grade = MonitorRecommender._scale_encoder[input["grade"]]
            self._esports = MonitorRecommender._scale_encoder[input["esports"]]

            # Filters
            self._aspect = input["aspect"]
            self._curve = input["curve"]
            self._size = input["size"]
            if self._size != "nopref":
                self._size = int(self._size)
            self._res = input["res"]
            self._min_rr = input["minRR"]
            if self._min_rr != "nopref":
                self._min_rr = int(self._min_rr.replace("hz", ""))
            self._panel = input["panel"]
            self._backlight = input["backlight"]
            self._hdr = input["hdr"]
            self._finish = input["finish"]
            self._hub = input["hub"]
            self._calibrated = input["calibrated"]

            self._data = {}

    def _classify_platform(self):
        if self._mac and self._console and self._gpu:
            self._type = "mac+console+pc"
        elif self._mac and self._console:
            self._type = "mac+console"
        elif self._mac and self._gpu:
            self._type = "mac+pc"
        elif self._console and self._gpu:
            self._type = "console+pc"
        elif self._mac:
            self._type = "mac"
        elif self._console:
            self._type = "console"
        elif self._gpu:
            self._type = "pc"
        else:
            self._type = "unknown"

        return self

    def _load(self):
        app_root = os.path.dirname(os.path.abspath(__file__))
        datapath = os.path.join(app_root, "..", "data", "monitors.xlsx")
        df = pd.read_excel(datapath)
        monitorlist = []
        for _, row in df.iterrows():
            monitor = Monitor(
                name=row["name"],
                persistence=row["persistence"],
                response=row["response"],
                contrast=row["contrast"],
                brightness=row["brightness"],
                volume=row["volume"],
                sharp=row["sharp"],
                subpixel=row["subpixel"],
                res=row["res"],
                rr=row["rr"],
                panel=row["panel"],
                size=row["size"],
                cost=row["cost"],
                min_gpu=row["min_gpu"],
                special=row["special"],
                curve=row["curve"],
                adobe_rgb=row["adobe_rgb"],
                hdr=row["hdr"],
                aspect=row["aspect"],
                reviews=row["reviews"],
            )
            monitorlist.append(monitor)
        self._data = monitorlist

        self._data = sorted(self._data, key=lambda monitor: monitor._cost, reverse=True)

        return self

    def _filter(self):
        new = []

        if self._budget:
            for monitor in self._recommended:
                # Check gpu
                # if "pc" in self._type and MonitorRecommender._gpu_order.index(
                #     self._gpu
                # ) > MonitorRecommender._gpu_order.index(monitor._min_gpu):
                #     continue
                if self._size != "nopref" and self._size != monitor._size:
                    continue
                elif self._curve != "nopref" and self._curve != monitor._curve:
                    continue
                elif self._aspect != "nopref" and self._aspect != monitor._aspect:
                    continue
                elif self._size != "nopref" and self._size != monitor._size:
                    continue
                elif self._min_rr != "nopref" and self._min_rr > monitor._rr:
                    continue
                elif self._panel != "nopref" and self._panel not in monitor._panel:
                    continue
                elif self._res != "nopref" and self._res != monitor._res:
                    continue
                elif (
                    self._backlight != "nopref"
                    and self._backlight not in monitor._panel
                ):
                    continue
                elif not self._grade and self._budget < 0.85714 * (monitor._cost):
                    continue
                elif self._type != "mac" and (
                    "Apple" in monitor._name or "UltraFine" in monitor._name
                ):
                    continue
                elif "console" in self._type and monitor._aspect != "Wide":
                    continue

                # elif (
                #     "console" in self._type
                #     and "pc" not in self._type
                #     and self._min_rr == "nopref"
                #     and self._panel == "nopref"
                #     and monitor._rr > 180
                # ):
                #     continue
                elif self._hdr != "nopref" and self._hdr != monitor._hdr:
                    continue
                elif (
                    self._calibrated != "nopref"
                    and "calibration" not in monitor._special
                    and "calibrated" not in monitor._special
                ):
                    continue
                elif self._finish == "glossy" and self._finish not in monitor._special:
                    continue
                elif self._finish == "matte" and "glossy" in monitor._special:
                    continue
                elif self._hub != "nopref" and "hub" not in monitor._special:
                    continue
                elif not self._esports and not self._grade and monitor._score == 0:
                    continue
                elif (
                    "pc" in self._type
                    and self._comp > 0.1
                    and (monitor._aspect != "Wide" or monitor._rr < 240)
                ):
                    continue
                elif self._text > 0.1 and monitor._subpixel < 3:
                    continue
                elif (
                    "pc" in self._type
                    and self._casual > 0.1
                    and (
                        monitor._rr < 120
                        or (self._budget > 500 and "1920" in monitor._res)
                        or monitor._contrast < 2
                    )
                ):
                    continue
                elif self._type != "console" and monitor._size > 41:
                    continue
                elif self._persistence > 0.1 and monitor._rr < 240:
                    continue
                elif self._response > 0.1 and monitor._response <= 5:
                    continue
                elif self._contrast > 0.1 and monitor._contrast < 3:
                    continue
                elif (
                    self._brightness > 0.1
                    and self._budget > 500
                    and monitor._brightness < 4
                ):
                    continue
                elif (
                    self._volume > 0.1
                    and self._budget > 500
                    and monitor._brightness < 4
                ):
                    continue
                elif self._sharp > 0.1 and self._sharp < 5:
                    continue
                elif self._subpixel > 0.1 and self._sharp < 5:
                    continue
                else:
                    new.append(monitor)

        self._recommended = new

        return self

    # implement minimums and sd
    def _advanced_recommend(self):
        for monitor in self._recommended:
            monitor._score = (
                self._persistence * monitor._persistence
                + self._response * monitor._response
                + self._contrast * monitor._contrast
                + self._brightness * monitor._brightness
                + self._volume * monitor._volume
                + self._sharp * monitor._sharp
                + self._subpixel * monitor._subpixel
            )

        self._recommended = sorted(
            self._recommended, key=lambda monitor: monitor._score, reverse=True
        )

        return self

    def _basic_recommend(self):
        if self._hdr != "Yes":
            for monitor in self._recommended:
                monitor._score = (
                    1.5
                    * self._comp
                    * (
                        0.45 * monitor._persistence
                        + 0.35 * monitor._response
                        + 0.1 * monitor._contrast
                        + 0 * monitor._brightness
                        + 0 * monitor._volume
                        + 0.1 * min(monitor._sharp, 5)
                        + 0 * monitor._subpixel
                    )
                    + self._casual
                    * (
                        0.05 * monitor._persistence
                        + 0.3 * monitor._response
                        + 0.45 * monitor._contrast
                        + 0 * monitor._brightness
                        + 0 * monitor._volume
                        + 0.3 * monitor._sharp
                        + 0 * monitor._subpixel
                    )
                    + self._media
                    * (
                        0 * monitor._persistence
                        + 0 * monitor._response
                        + 0.55 * monitor._contrast
                        + 0.1 * monitor._brightness
                        + 0 * monitor._volume
                        + 0.35 * monitor._sharp
                        + 0 * monitor._subpixel
                    )
                    + 0.5
                    * self._text
                    * (
                        0 * monitor._persistence
                        + 0 * monitor._response
                        + 0 * monitor._contrast
                        + 0 * monitor._brightness
                        + 0 * monitor._volume
                        + 0 * monitor._sharp
                        + 1 * monitor._subpixel
                    )
                )
        else:
            for monitor in self._recommended:
                monitor._score = (
                    1.5
                    * self._comp
                    * (
                        0.45 * monitor._persistence
                        + 0.35 * monitor._response
                        + 0.05 * monitor._contrast
                        + 0.05 * monitor._brightness
                        + 0 * monitor._volume
                        + 0.1 * min(monitor._sharp, 5)
                        + 0 * monitor._subpixel
                    )
                    + self._casual
                    * (
                        0.15 * monitor._persistence
                        + 0.15 * monitor._response
                        + 0.225 * monitor._contrast
                        + 0 * monitor._brightness
                        + 0.35 * monitor._volume
                        + 0.125 * monitor._sharp
                        + 0 * monitor._subpixel
                    )
                    + self._media
                    * (
                        0 * monitor._persistence
                        + 0 * monitor._response
                        + 0.35 * monitor._contrast
                        + 0.20 * monitor._brightness
                        + 0.25 * monitor._volume
                        + 0.15 * monitor._sharp
                        + 0 * monitor._subpixel
                    )
                    + 0.5
                    * self._text
                    * (
                        0 * monitor._persistence
                        + 0 * monitor._response
                        + 0 * monitor._contrast
                        + 0 * monitor._brightness
                        + 0 * monitor._volume
                        + 0 * monitor._sharp
                        + 1 * monitor._subpixel
                    )
                )

        self._recommended = sorted(
            self._recommended, key=lambda monitor: monitor._score, reverse=True
        )
        return self

    def _categorize_perf(self):
        for monitor in self._recommended:
            # motion = 0.5 * monitor._persistence + 0.5 * monitor._response
            motion = min(monitor._persistence, monitor._response)

            if 0 <= motion < 2:
                motioncat = "Bad"
            elif 2 <= motion < 5:
                motioncat = "Mediocre"
            elif 5 <= motion < 7.5:
                motioncat = "Good"
            elif 7.5 <= motion <= 10:
                motioncat = "Excellent"

            pq = 0.7 * monitor._contrast + 0.3 * monitor._volume

            if 0 <= pq < 2:
                pqcat = "Bad"
            elif 2 <= pq < 5:
                pqcat = "Mediocre"
            elif 5 <= pq < 8:
                pqcat = "Good"
            elif 8 <= pq <= 10:
                pqcat = "Excellent"

            if 0 <= monitor._subpixel < 2:
                textcat = "Bad"
            elif 2 <= monitor._subpixel < 5:
                textcat = "Mediocre"
            elif 5 <= monitor._subpixel < 7:
                textcat = "Good"
            elif 7 <= monitor._subpixel <= 10:
                textcat = "Excellent"

            monitor._persistence = motioncat
            monitor._contrast = pqcat
            monitor._subpixel = textcat

        return self

    def _to_json(self, x):
        self._recommended = (
            self._recommended[:x] if len(self._recommended) > x else self._recommended
        )

        self._categorize_perf()

        monitor_list = []
        for monitor in self._recommended:
            monitor_dict = {
                "name": monitor._name,  # + " " + str(round(monitor._score, 2)),
                "persistence": monitor._persistence,
                "response": monitor._response,
                "contrast": monitor._contrast,
                "brightness": monitor._brightness,
                "volume": monitor._volume,
                "sharp": monitor._sharp,
                "subpixel": monitor._subpixel,
                "resolution": monitor._res,
                "refreshRate": monitor._rr,
                "panel": monitor._panel,
                "size": monitor._size,
                "cost": monitor._cost,
                "minGpu": monitor._min_gpu,
                "curve": monitor._curve,
                "aspectRatio": monitor._aspect,
                "specialFeatures": monitor._special,
                "adobeRgb": monitor._adobe_rgb,
                "hdr": monitor._hdr,
                "reviews": monitor._reviews,
            }
            for key, value in monitor_dict.items():
                if isinstance(value, float) and math.isnan(value):
                    monitor_dict[key] = None
            monitor_list.append(monitor_dict)
        return json.dumps(monitor_list)

    def recommend(self):
        self._classify_platform()
        self._load()
        self._recommended = self._data
        # self._colorimeter = []

        # Handle main recommendations
        if self._mode == "advanced":
            self._advanced_recommend()
        else:
            self._basic_recommend()

        # Special handling:

        if self._grade:
            self._recommended = [
                monitor
                for monitor in self._data
                if "hardware calibration" in monitor._special.lower()
            ]

        if self._esports:
            self._recommended = []
            for monitor in self._data:
                if (
                    monitor._size < 26
                    and monitor._size > 23
                    and monitor._persistence >= 7
                ):
                    self._recommended.append(monitor)

            self._recommended = sorted(
                self._recommended,
                key=lambda monitor: monitor._persistence,
                reverse=True,
            )

        if self._print:
            self._recommended = [
                monitor for monitor in self._recommended if monitor._adobe_rgb == "Yes"
            ]

        self._filter()

        return self._to_json(8)
