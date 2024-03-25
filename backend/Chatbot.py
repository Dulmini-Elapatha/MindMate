from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

openai.api_key = "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"

def get_chat_response(user_message):
    response = openai.ChatCompletion.create(
        model="ft:gpt-3.5-turbo-0125:iit-srilanka:mindbuddy-bot:94cbYmms",
        messages=[
            {"role": "system", "content": "You are MindBuddy, a caring chatbot focused on helping people with their mental health, ensuring they feel supported and satisfied."},
            {"role": "user", "content": user_message},
        ],
        temperature=0,
        max_tokens=500
    )
    return response.choices[0].message['content']

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message')

    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    response = get_chat_response(user_message)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
