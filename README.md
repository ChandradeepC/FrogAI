# FrogAI: An NLP + KDD project for monitor recommendation

Template recognition:
- usage-based recommendation request
- specification-based recommendation request
- evaluation request

Role-filler extraction with seperate classifiers (ALGORITHMS)
- specification extraction
- usage extraction

Request processing:
- rule based decision-tree for usage-based recommendation
- matching for specification-based recommendation
- formatted specification pullup with metrics for comparisons
- specification + rule based recommendation for usage-based specification-constrained predictions 
- specification pullup + rule based analysis with norms for evaluation request

Monitor database:
- official name and common names
- specifications including ports
- review links
- special information
- special notes
- extra information only for popular or recommendable monitors

Usage database:
- software lists with labelled software types
- wordlists with other labelled usage types

Relationship databases:
- relation between usage and specification
- metrics and norms for continuous specifications

Recommendation engine: 
- deep rule based human constructed tree for usage based recommendations
- switch to matching for specifications based recommendations
- evaluation request, return pros and cons
- if hybrid request, then return affirmative or better options
- if one monitor is not reviewed return not reviewed. 

TODO

1. Scrape rtings properly again DONE
2. Role filler extraction + dataset -> use heuristics to detect template


Template heuristics: 
Monitors detected: 1 -> evaluation request (+ spec/usage extract + spec/usage recommendation if nothing else is detected)
Monitors detected: 2+ -> comparison request (+ spec/usage extract + spec/usage recommendation if nothing else is detected)
Usages detected: -> usage-based recommendation request
Specs detected: -> specification-based recommendation request
Usage + specs detected -> prioritize usage first 