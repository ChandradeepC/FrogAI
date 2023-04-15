from abc import ABC, abstractmethod

from pathlib import Path
home = str(Path.home()) 
import sys
sys.path.insert(0,'..')

import pandas as pd


class Monitor:
    def __init__(self, name, res, rr, panel, size, cost, min_gpu, special, curve, aspect, reviews):
        self._name = name
        self._res = res.replace('p','')
        self._rr = rr
        self._panel = panel
        self._size = int(size.replace('"', ''))
        self._cost = int(cost.replace('$', ''))
        self._min_gpu = min_gpu
        self._special = special
        self._curve = curve
        self._aspect = aspect
        self._reviews = reviews

    def __repr__(self):
        return f"Monitor(name='{self._name}', res='{self._res}', rr='{self._rr}', panel='{self._panel}', size='{self._size}', cost='{self._cost}', min_gpu='{self._min_gpu}', curve='{self._curve}',aspect='{self._aspect}', special='{self._special}', reviews='{self._reviews}')"
    
    def __eq__(self,other):
        if not isinstance(other, Monitor):
            return NotImplemented
        return self._name == other._name


class Recommender(ABC):
    @abstractmethod
    def recommend(self):
        pass
        

class MonitorRecommender(Recommender):
    _scale_encoder = {
        'not': 0,
        'imp': 0.5,
        'only': 1,
        'yes': True,
        'no': False,
    }

    #TODO: merge the order lists
    _gpu_order = [
        '4090',
        '4080',
        '7900xtx',
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
        'floor'
    ]

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
    DEVICE AND BUDGET:
    'pc': no or name of gpu
    'mac': no or yes
    'console': no or name of console
    'budget': 0 - 6000



    USE CASES:
    This is (not) important to me at all
    This is (imp)ortant to me
    This is the (only) thing I do
    
    #no idea, never, sometimes, frequently, very, only
    'comp': 
    'cas':
    'text':
    'media':

    #no, yes
    'pic_vid': 
    'print':
    'color':

    ADVANCED FILTERS:
    'aspect': nopref, wide, ultrawide, superultrawide
    'curve': yes, no
    'size': nopref,24,25,27,32,34,38,49
    49 will be specially handled
    'res': nopref,
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
        
        #Colorimeter
        'colorimeter': '../data/colorimeter.csv'
    }


    def __init__(self, input):
        self._gpu = input['pc']
        if self._gpu == 'no':
            self._gpu = False
        self._console = input['console']
        if self._console == 'no':
            self._console = False
        self._mac = MonitorRecommender._scale_encoder[input['mac']]
        self._budget = input['budget']
        self._comp = MonitorRecommender._scale_encoder[input['comp']]
        self._cas = MonitorRecommender._scale_encoder[input['cas']]
        self._text = MonitorRecommender._scale_encoder[input['text']]
        self._media = MonitorRecommender._scale_encoder[input['media']]
        self._pic_vid = MonitorRecommender._scale_encoder[input['pic_vid']]
        self._print = MonitorRecommender._scale_encoder[input['print']]
        self._color = MonitorRecommender._scale_encoder[input['color']]
        self._aspect = input['aspect']
        self._curve = input['curve']
        self._size = input['size']
        self._res = input['res']
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


    def _load_csv(self, dim='jack'):
        df = pd.read_csv(MonitorRecommender._path[dim])
        monitorlist = []
        for _, row in df.iterrows():
            monitor = Monitor(row['name'], row['res'], row['rr'], row['panel'], row['size'], row['cost'], row['min_gpu'],row['special'], row['curve'], row['aspect'], row['reviews'])
            monitorlist.append(monitor)
        self._data[dim] = monitorlist
        return self
    

    def _load(self):
        files = ['jack','grading','motion_text','motion','pq_motion','pq_text','pq','print','text', 'colorimeter']
        for file in files:
            self._load_csv(file)
            #print('loaded'+file)
        return self
    
    
    
    def _filter(self):
        new = []
        for monitor in self._recommended:
            #Check gpu
            if MonitorRecommender._gpu_order.index(self._gpu) < MonitorRecommender._gpu_order.index(monitor._min_gpu):
                continue
            elif self._size != 'nopref' and self._size != monitor._size:
                continue
            elif self._curve != 'nopref' and self._curve != monitor._curve:
                continue
            elif self._aspect != 'nopref' and self._aspect != monitor._aspect:
                continue
            elif self._size != 'nopref' and self._size != monitor._size:
                continue
            elif self._budget < 0.9 * monitor._cost:
                continue
            else:
                new.append(monitor)

        self._recommended = new

        return self


        
    #NOTE: Laptops not supported at the moment
    #Need to add ultrawides an budget monitors
    def recommend(self):
        self._classify_platform()
        self._recommended = self._data['jack']

        self._load()

        add = False


        if self._type == 'mac+console+pc':
            pass


        elif self._type == 'mac+console':
            pass


        elif self._type == 'mac+pc':
            pass


        elif self._type == 'console+pc':
            pass

        #----------------------------------------------
        elif self._type == 'mac':
            #Gray out comp and cas
            if self._color:
                self._recommended = self._data['grading']

            elif self._text == 0:
                if self._media == 0:
                    pass
                elif self._media == 0.5:
                    self._recommended = self._data['pq']
                elif self._media == 1:
                    self._recommended = self._data['pq']


            elif self._text == 0.5:
                if self._media == 0:
                    self._recommended = self._data['text']
                elif self._media == 0.5:
                    self._recommended = self._data['pq_text']
                elif self._media == 1:
                    #Not possible
                    pass


            elif self._text == 1:
                if self._media == 0:
                    self._recommended = self._data['text']
                elif self._media == 0.5:
                    #Not possible
                    pass
                elif self._media == 1:
                    #Not possible
                    pass
                    
            if self._print:
                self._recommended = [monitor for monitor in self._recommended if monitor in self._data['print']]

            
            if self._pic_vid:
                add = True
                
        #----------------------------------------------
        elif self._type == 'console':
            pass


        elif self._type == 'pc':
            pass


        else:
            pass


        #Colorimeter addition
        if add:
            self._budget -= 150
            self._filter()
            self._recommended = self._data['colorimeter'] + self._recommended
        else:
            self._filter()

        return self._recommended
