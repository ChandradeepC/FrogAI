# FrogAI: Monitor Recommendations

[![Scc Count Badge](https://sloc.xyz/github/theNullCrown/FrogAI/?category=code,api,vite-project/src)](https://github.com/theNullCrown/FrogAI/)

A web application for providing high quality up-to-date monitor recommendations.

## Setup

Fork the repository before cloning it.

1. Setup Node.js:

-   Install Node.js
-   Enter the vite-project directory: `cd vite-project`
-   Install the required packages: `npm install`

2. Build the frontend:

-   Build the frontend for production use: `npm run build`

3. Setup Python environment

-   Install python@3.9 or higher
-   Create a virtual environment: `python3 -m venv venv`
-   Activate the environment:
    -   Mac or Linux: `source venv/bin/activate`
    -   Windows: `venv\Scripts\activate`
-   Install the required packages: `pip install -r requirements.txt`

4. Run the production server: `gunicorn api.wsgi:app`
