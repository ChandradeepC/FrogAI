from flask import Flask, jsonify, request
from main import MonitorRecommender

app = Flask(__name__)


@app.route("/api/monitor-recommendations", methods=["POST"])
def monitor_recommendations():
    input_data = request.json
    recommender = MonitorRecommender(input_data)

    return jsonify([m.__dict__ for m in recommender.recommend()])


if __name__ == "__main__":
    app.run(debug=True)
