from flask import Flask, jsonify, request
from flask_cors import CORS
from embedding_chatbot import initialise_model
import openai

app = Flask(__name__)
CORS(app)  # Initialize CORS with your Flask app

main_chat_model = initialise_model(api_key=openai.api_key)

# Endpoint for receiving and processing messages
@app.route('/api/messages', methods=['POST'])
def process_message():
    # Get the message from the request body
    message = request.json['message']

    response = generate_response(message)
    print(response)

    # Return the response as JSON
    return jsonify({'response': response})

test = 0

# Function to generate a response based on the message
def generate_response(message):
    global test
    test += 1
    
    print(test)
    # You can use any NLP or ML techniques here

    # For now, let's just echo the received message

    # Generate response from ChatGPT using the GPT-3.5-turbo model
    reply = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
            {"role": "system", "content": "You are a helpful and friendly assistant"},
            {"role": "user", "content": message}
        ]
    )
    message = reply.choices[0]["message"]["content"].strip()
    message += f'{test=}'
    return message

if __name__ == '__main__':
    app.run(debug=True)