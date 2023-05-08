# FrogAI: Monitor Recommendations

[![Scc Count Badge](https://sloc.xyz/github/theNullCrown/FrogAI/?category=code,api,vite-project/src)](https://github.com/theNullCrown/FrogAI/)

A web application for providing high quality up-to-date monitor recommendations.

## Setup

Fork the repository before cloning it.

1. Setup Node.js:

-   Install Node.js
-   Enter the vite-project directory: `cd vite-project`
-   Install the required packages: `npm install`

2. Start the frontend:

-   Build the frontend for production use: `npm run build` (no need to start the
    frontend seperately if you do this, Gunicorn will serve the frontend as
    well, but you lose the ability to hot reload and need to build after every
    change) OR
-   Run the Vite development server: `npm run dev` (will need to start frontend
    seperately everytime but supports hot reloading)

3. Setup Python environment

-   Install python@3.9 or higher
-   Create a virtual environment: `python3 -m venv venv`
-   Activate the environment:
    -   Mac or Linux: `source venv/bin/activate`
    -   Windows: `venv\Scripts\activate`
-   Install the required packages: `pip install -r requirements.txt`

4. Run the production server: `gunicorn api.wsgi:app`
