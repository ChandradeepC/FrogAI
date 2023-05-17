# FrogAI: Monitor Recommendations

[![Scc Count Badge](https://sloc.xyz/github/theNullCrown/FrogAI/?category=code,api,vite-project/src)](https://github.com/theNullCrown/FrogAI/)

A web application for providing high quality up-to-date monitor recommendations.

## Setup

Fork the repository before cloning it. For windows users, use WSL as Gunicorn is
not supported on Windows

1. Install Node.js
2. Enter the vite-project directory: `cd vite-project`
3. Install the required packages: `npm install`
4. Build the frontend for production use: `npm run build`
5. Return to the top-level directory: `cd ..`
6. Install python@3.9 or higher
7. Create a virtual environment: `python3 -m venv venv`
8. Activate the environment: `source venv/bin/activate`
9. Install the required packages: `pip install -r requirements.txt`
10. Run the production server: `gunicorn api.wsgi:app`
