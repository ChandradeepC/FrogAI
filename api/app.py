from flask import Flask, jsonify, render_template, request, send_from_directory
from flask_cors import CORS, cross_origin

from api.recommender import MonitorRecommender


def create_app():
    app = Flask(__name__, static_folder="../vite-project/dist", static_url_path="")
    cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

    @app.route("/api/monitor-recommendations", methods=["OPTIONS", "POST"])
    @cross_origin()
    def monitor_recommendations():
        if request.method == "OPTIONS":
            headers = {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "Content-Type",
            }
            return ("", 204, headers)

        input_data = request.json
        recommender = MonitorRecommender(input_data)

        return recommender.recommend()

    @app.route("/")
    @cross_origin()
    def serve():
        return send_from_directory(app.static_folder, "index.html")

    return app
