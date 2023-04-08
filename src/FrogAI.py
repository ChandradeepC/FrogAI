import nltk
import pandas as pd
import numpy as np
import string
import math

class Query:
    def __init__(self, text):
        self.text = text
    
    '''Method to extract the use and specs from the query'''
    def _extract_features(self):
        pass

    '''Method to classify the query into:
    1. Use-based recommendation request
    2. Specification-based recommendation request
    3. Evaluation request
    '''
    def _classify(self):
        pass

    '''Method to answer the query based on the classified type'''
    def _answer(self):
        pass





    

