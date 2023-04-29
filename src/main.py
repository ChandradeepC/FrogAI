from abc import ABC, abstractmethod

from pathlib import Path

home = str(Path.home())
import sys
import os
import json
import math

sys.path.insert(0, "..")

import pandas as pd


class Monitor:
    def __init__(
        self,
        name,
        motion,
        pq,
        sharp,
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
        self._motion = motion
        self._pq = pq
        self._sharp = sharp
        self._res = res
        self._rr = int(rr.replace("hz", ""))
        self._panel = panel
        self._size = int(size.replace('"', ""))
        self._cost = cost
        self._min_gpu = min_gpu
        self._special = special
        self._curve = curve
        self._adobe_rgb = adobe_rgb
        self._hdr = hdr
        self._aspect = aspect
        self._reviews = str(reviews).split()
        if "nan" in self._reviews:
            self._reviews = []
        self._score = 0

    def __repr__(self):
        return f"Monitor(name={self._name}, motion={self._motion}, pq={self._pq}, sharp={self._sharp}, res={self._res}, rr={self._rr}hz, panel={self._panel}, size={self._size}, cost=${self._cost}, min_gpu={self._min_gpu}, special={self._special}, curve={self._curve}, adobe_rgb={self._adobe_rgb},hdr={self._hdr}, aspect={self._aspect}, reviews={self._reviews})"

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
        "imp": 0.55,
        "very": 0.8,
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
        "4090 laptop",
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
            self._gpu = input["pcGpu"]
            if self._gpu == "no":
                self._gpu = False
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
            self._motion = MonitorRecommender._scale_encoder[input["motion"]]
            self._pq = MonitorRecommender._scale_encoder[input["pq"]]
            self._sharp = MonitorRecommender._scale_encoder[input["sharp"]]

            # Special uses
            self._edit = MonitorRecommender._scale_encoder[input["edit"]]
            self._print = MonitorRecommender._scale_encoder[input["print"]]
            self._grade = MonitorRecommender._scale_encoder[input["grade"]]

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
                motion=row["motion"],
                pq=row["pq"],
                sharp=row["sharp"],
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
        return self

    def _filter(self):
        new = []
        for monitor in self._recommended:
            # Check gpu
            if "pc" in self._type and MonitorRecommender._gpu_order.index(
                self._gpu
            ) > MonitorRecommender._gpu_order.index(monitor._min_gpu):
                continue
            elif self._size != "nopref" and self._size != monitor._size:
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
            elif self._backlight != "nopref" and self._backlight not in monitor._panel:
                continue
            elif self._budget < 0.9 * monitor._cost:
                continue
            elif self._type != "mac" and "Apple" in monitor._name:
                continue
            elif "console" in self._type and monitor._aspect != "wide":
                continue
            elif self._hdr != "nopref" and self._hdr != monitor._hdr:
                continue
            else:
                new.append(monitor)

        self._recommended = new

        return self

    def _advanced_recommend(self):
        for monitor in self._recommended:
            monitor._score = (
                self._motion * monitor._motion
                + self._pq * monitor._pq
                + self._sharp * monitor._sharp
            )

        self._recommended = sorted(
            self._recommended, key=lambda monitor: monitor._score, reverse=True
        )

        return self

    def _basic_recommend(self):
        return self

    def _to_json(self):
        self._recommended = (
            self._recommended[:5] if len(self._recommended) > 5 else self._recommended
        )

        monitor_list = []
        for monitor in self._recommended:
            monitor_dict = {
                "name": monitor._name,
                "motion": monitor._motion,
                "pq": monitor._pq,
                "sharp": monitor._sharp,
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

        # Color grading
        if self._grade:
            self._recommended = [
                monitor
                for monitor in self._data
                if "hardware calibration" in monitor._special
            ]

        # Print intersection
        if self._print:
            self._recommended = [
                monitor for monitor in self._recommended if monitor._adobe_rgb == "yes"
            ]

        # Colorimeter addition and final filter
        if self._edit or self._print:
            self._budget -= 150
            self._filter()
        else:
            self._filter()

        return self._to_json()  # , self._colorimeter
