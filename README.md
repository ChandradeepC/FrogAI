# FrogAI: Monitor Recommendations

[![Scc Count Badge](https://sloc.xyz/github/theNullCrown/FrogAI/?category=code,api,vite-project/src)](https://github.com/theNullCrown/FrogAI/)

A web application for providing high quality up-to-date monitor recommendations.

## Setup

Fork the repository before cloning it.

### Backend

1. Install python@3.9 or higher
2. Create a virtual environment: `python3 -m venv venv`
3. Activate the environment:
    - Mac or Linux: `source venv/bin/activate`
    - Windows: `venv\Scripts\activate`
4. Install the required packages: `pip install -r requirements.txt`
5. Run the gunicorn production server: `gunicorn api.wsgi:app`

### Frontend

1. Install Node.js
2. Enter the vite-project directory: `cd vite-project`
3. Install the required packages: `npm install`
4. Run the frontend: `npm run dev`
5. Open the address of the frontend in your browser
