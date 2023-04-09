
class MonitorRecommender:
    _scale_encoder = {
        'no idea': 0,
        'never': 1,
        'sometimes': 2,
        'frequently': 3,
        'mostly': 4,
        'only': 5,
        'yes': True,
        'no': False

    }

    '''Input format:
    {
    'budget':
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
    'secondary':
    }
    '''

    def __init__(self, input):
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
        self._secondary = MonitorRecommender._scale_encoder[input['secondary']]
        
    def recommend(self):
        pass
