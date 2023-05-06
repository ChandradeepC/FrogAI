from flask import Flask, jsonify, request
from recommender import MonitorRecommender
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route("/api/monitor-recommendations", methods=["OPTIONS", "POST"])
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


if __name__ == "__main__":
    app.run(debug=True)
