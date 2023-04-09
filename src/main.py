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
        self._cost = cost
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
        'mostly': 4,
        'only': 5,
        'yes': True,
        'no': False,
        'wide': 1.78,
        'ultrawide': 2.34,
        'superultrawide': 3.56
    }

    _pc_gpu_order = {
        '4090',
        '7900xtx',
        '4080',
        '7900xt',
        '3090ti',
        '6950xt',
        '4070ti',
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
        '4090',
        '4080',
        '3080ti',
        '3080',
        '4070',
        '6850m'
        '3070ti',
        '6800M',
        '3070',
        '4060',
        '6800s',
        '6700m',
        '2080',
        '3060',
        '4050',
        '6700S',
        '2070',
        '6600M',
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
    'device': pc, laptop, mac, console
    'gpu': pc gpu or laptop gpu
    'budget': 0 - 6000
    
    #no idea, never, sometimes, frequently, mostly, only
    'comp': 
    'sdrcas': 
    'hdrcas':
    'text':
    'sdrmov':
    'hdrmov':
    'digpic': 
    'printpic':
    'sdrvid':
    'hdrvid':

    'aspect': wide, ultrawide, superultrawide
    'curve': yes, no
    }
    '''

    #File locations
    _motion = '../data/motion.csv'
    _console = '../data/console.csv'
    _hdr = '../data/hdr.csv'
    _work = '../data/work.csv'
    _pq = '../data/pq.csv'


    def __init__(self, input):
        self._device = input['device']
        self._gpu = input['gpu']
        self._budget = input['budget']
        self._comp = MonitorRecommender._scale_encoder[input['comp']]
        self._sdrcas = MonitorRecommender._scale_encoder[input['sdrcas']]
        self._hdrcas = MonitorRecommender._scale_encoder[input['hdrcas']]
        self._text = MonitorRecommender._scale_encoder[input['text']]
        self._sdrmov = MonitorRecommender._scale_encoder[input['sdrmov']]
        self._hdrmov = MonitorRecommender._scale_encoder[input['hdrmov']]
        self._digpic = MonitorRecommender._scale_encoder[input['digpic']]
        self._printpic = MonitorRecommender._scale_encoder[input['printpic']]
        self._sdrvid = MonitorRecommender._scale_encoder[input['sdrvid']]
        self._hdrvid = MonitorRecommender._scale_encoder[input['hdrvid']]
        self._aspect = MonitorRecommender._scale_encoder[input['aspect']]
        self._curve = input['curve']

    def _load_data(self):

        #load motion dimension
        df = pd.read_csv(MonitorRecommender._motion)
        motion = []
        for _, row in df.iterrows():
            monitor = Monitor(row['name'], row['res'], row['rr'], row['panel'], row['size'], row['cost'], row['min_gpu'],row['special'], row['reviews'])
            motion.append(monitor)
        
        #load pq dimension
        
        #load console dimension
        #load work dimension
        #load HDR dimension
        #load esports dimension
        #load photo editing dimension
        #load video editing dimension
        #load media consumption dimension
        #(?)load ultrawide dimension
        #(?)load super ultrawide dimension
        #(?)load curved dimension
        
        data = {}
        data['motion'] = motion
        
        self._data = data
        return self
    
        
    def recommend(self):
        pass
