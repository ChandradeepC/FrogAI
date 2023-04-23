from flask import Flask, jsonify, request
from main import MonitorRecommender
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route("/api/monitor-recommendations", methods=["POST"])
def monitor_recommendations():
    input_data = request.json
    recommender = MonitorRecommender(input_data)

    return recommender.recommend()


if __name__ == "__main__":
    app.run(debug=True)
