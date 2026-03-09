from flask import Flask, request, jsonify
from flask_cors import CORS
from Config import get_db
from AI_API_Config import ai_sql

app = Flask(__name__)
CORS(app)

@app.route("/generate", methods=["POST"])
def generate():

    data = request.get_json()
    prompt = data.get("prompt")

    ai_response = ai_sql(prompt)

    if ai_response["type"] == "answer":

        return jsonify({
            "type": "answer",
            "answer": ai_response["answer"]
        })


    sql_query = ai_response["query"]

    db = get_db()
    cursor = db.cursor(dictionary=True)

    cursor.execute(sql_query)
    result = cursor.fetchall()

    cursor.close()
    db.close()

    return jsonify({
        "type": "table",
        "query": sql_query,
        "result": result
    })


if __name__ == "__main__":
    app.run(debug=True)