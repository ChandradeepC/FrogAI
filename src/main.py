from abc import ABC, abstractmethod

from pathlib import Path
home = str(Path.home()) 
import sys
sys.path.insert(0,'..')

import pandas as pd


class Monitor:
    def __init__(self, name, res, rr, panel, size, cost, min_gpu, special, reviews):
        self._name = name
        self._res = res
        self._rr = rr
        self._panel = panel
        self._size = size
        self._cost = float(cost.replace('$', ''))
        self._min_gpu = min_gpu
        self._special = special
        self._reviews = reviews

    def __repr__(self):
        return f"Monitor(name='{self._name}', res='{self._res}', rr='{self._rr}', panel='{self._panel}', size='{self._size}', cost='{self._cost}', min_gpu='{self._min_gpu}', special='{self._special}', reviews='{self._reviews}')"


class Recommender(ABC):
    @abstractmethod
    def recommend(self):
        pass
        

class MonitorRecommender(Recommender):
    _scale_encoder = {
        'no idea': 0,
        'never': 1,
        'sometimes': 2,
        'frequently': 3,
        'very': 4,
        'only': 5,
        'yes': True,
        'no': False,
        'wide': 1.78,
        'ultrawide': 2.34,
        'superultrawide': 3.56
    }

    #TODO: merge the order lists
    _gpu_order = {
        '4090',
        '7900xtx',
        '4080',
        '7900xt',
        '3090ti',
        '6950xt',
        '4070ti',
        '4090 laptop',
        '6900xt',
        '3090',
        '3080ti',
        '3080_12gb',
        '6800xt',
        '3080_10gb',
        '6800',
        '3070ti',
        '6750xt',
        '3070',
        '6700xt',
        '2080ti',
        'series_x',
        'ps5',
        '3060ti',
        '2080super',
        '6700',
        '2080',
        'A770_16gb',
        '6650xt',
        '2070super',
        'A770_8gb',
        '6600xt',
        '5700xt',
        '3060',
        'VII',
        '2070',
        '6600',
        'A750',
        '1080ti',
        '2060super',
        '5700',
        '5600xt',
        'Vega64',
        '2060',
        '1080',
        '3050',
        '1070ti',
        'Vega56',
        '1660super',
        '1660ti',
        '1070',
        '1660',
        'series_s'
        '5500xt_8gb',
        '590',
        '980ti',
        '580_8gb',
        '1650super',
        '5500xt',
        '1060_6gb',
        '6500xt',
        '980',
        '1650',
        'A380',
        '570_4gb',
        '1060_3gb',
        '1650',
        '970',
        '6400',
        '780',
        '1050ti',
        '1630',
        '1050',
        '560'
        '550',
        '1030'
    }

    _laptop_gpu_order = {
        '4080',
        '3080ti',
        '3080',
        '4070',
        '6850m'
        '3070ti',
        '6800m',
        '3070',
        '4060',
        '6800s',
        '6700m',
        '2080',
        '3060',
        '4050',
        '6700s',
        '2070',
        '6600m',
        '2060',
        '3050ti',
        '1660ti',
        '3050',
        '6500m',
        '2050',
        '1650ti',
        '1650',
    }

    '''Input format:
    {
    Frontend message for choosign the correct platforms
    'pc': no or name of gpu
    'mac': no or yes
    'console': no or name of console
    'budget': 0 - 6000

    (No idea) what this is
    I (never) plan to use my monitor for this
    I do this (sometimes) but dont care about it
    I do this (frequently) and it is important to me
    This is (very) important to me
    This is the (only) thing I do
    
    #no idea, never, sometimes, frequently, very, only
    'comp': 
    'cas':
    'text':
    'media':
    'pic': 
    'print':
    'vid':

    'aspect': wide, ultrawide, superultrawide
    'curve': yes, no
    }
    '''


    #File locations for dimensions:
    _path = {
        #Balanced classes
        'jack': '../data/jack.csv',
        'motion_text': '../data/motion_text.csv',
        'pq_text': '../data/pq_text.csv',
        'pq_motion': '../data/pq_motion.csv',

        #Niche classes
        'grading': '../data/grading.csv',
        'print': '../data/print.csv',

        #One trick classes
        'motion': '../data/motion.csv',
        'pq': '../data/pq.csv',
        'text': '../data/text.csv',
    }


    def __init__(self, input):
        self._gpu = input['pc']
        if self._gpu == 'no':
            self._gpu = False
        self._console = input['console']
        if self._console == 'no':
            self._gpu = False
        self._mac = MonitorRecommender._scale_encoder[input['mac']]
        self._budget = input['budget']
        self._comp = MonitorRecommender._scale_encoder[input['comp']]
        self._cas = MonitorRecommender._scale_encoder[input['cas']]
        self._text = MonitorRecommender._scale_encoder[input['text']]
        self._media = MonitorRecommender._scale_encoder[input['media']]
        self._pic = MonitorRecommender._scale_encoder[input['pic']]
        self._print = MonitorRecommender._scale_encoder[input['print']]
        self._vid = MonitorRecommender._scale_encoder[input['vid']]
        self._aspect = MonitorRecommender._scale_encoder[input['aspect']]
        self._curve = MonitorRecommender._scale_encoder[input['curve']]
        self._data = {}


    def _classify_platform(self):
        if self._mac and self._console and self._gpu:
            self._type = "mac+console+gpu"
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
        return self


    def _load_data(self, dim='jack'):

        df = pd.read_csv(MonitorRecommender._path[dim])
        monitorlist = []
        for _, row in df.iterrows():
            monitor = Monitor(row['name'], row['res'], row['rr'], row['panel'], row['size'], row['cost'], row['min_gpu'],row['special'], row['reviews'])
            monitorlist.append(monitor)
  
        self._data[dim] = monitorlist
        return self

        
    #NOTE: Laptops not supported at the moment
    def recommend(self):
        pass
