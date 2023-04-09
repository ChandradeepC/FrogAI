
class Recommender:
    scale_encoder = {
        'no idea': 0,
        'never': 1,
        'sometimes': 2,
        'frequently': 3,
        'mostly': 4,
        'only': 5
    }

    '''Input format:
    {
    'budget' = 
    'comp' =
    'sdrcas' = 
    'hdrcas' =
    'text' =
    'sdrmov' =
    'hdrmov' =
    'digpic' = 
    'printpic' =
    'sdrvid' =
    'hdrvid' = 
    }
    '''

    def __init__(self, input):
        self._budget = input['budget']
        self._comp = Recommender.scale_encoder[input['comp']]
        self._sdrcas = Recommender.scale_encoder[input['sdrcas']]
        self._hdrcas = Recommender.scale_encoder[input['hdrcas']]
        self._text = Recommender.scale_encoder[input['text']]
        self._sdrmov = Recommender.scale_encoder[input['sdrmov']]
        self._hdrmov = Recommender.scale_encoder[input['hdrmov']]
        self._digpic = Recommender.scale_encoder[input['digpic']]
        self._printpic = Recommender.scale_encoder[input['printpic']]
        self._sdrvid = Recommender.scale_encoder[input['sdrvid']]
        self._hdrvid = Recommender.scale_encoder[input['hdrvid']]
        
    def recommend(self):
        pass
