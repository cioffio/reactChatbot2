from flask import Flask, jsonify, request
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)  # Initialize CORS with your Flask app

# Endpoint for receiving and processing messages
@app.route('/api/messages', methods=['POST'])
def process_message():
    # Get the message from the request body
    message = request.json['message']

    response = generate_response(message)
    response = "Hola"

    # Return the response as JSON
    return jsonify({'response': response})

# Function to generate a response based on the message
def generate_response(message):

    # You can use any NLP or ML techniques here

    # For now, let's just echo the received message

    ç# Generate response from ChatGPT using the GPT-3.5-turbo model
    reply = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
            {"role": "system", "content": "You are a helpful and friendly assistant"},
            {"role": "user", "content": message}
        ]
    )
    message = reply.choices[0]["message"]["content"].strip()
    return message

if __name__ == '__main__':
    app.run(debug=True)