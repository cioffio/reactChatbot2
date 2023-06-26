from flask import Flask, jsonify, request
from flask_cors import CORS
from embedding_chatbot import initialise_model
from report_bot import generate_report
import openai
from copy import copy
import pandas as pd

app = Flask(__name__)
CORS(app)  # Initialize CORS with your Flask app


main_chat_model = initialise_model(api_key=openai.api_key)

df = pd.DataFrame(
    data='test',
    index = ['Full legal name', 'Legal form', 'Registered address', 'Principal business address (may be the same as registered address)',
             'Business description (SIC codes)', 'Name of key executives', 'Registration authority', 'Registration number',
             'Registration date', 'Registration status', 'Regulator (only for finanial institutions)',
             'Identification of UBO (Ultimate Beneficial Owner)', 'Source of Funds'],
    columns = ['Data_point', 'Data_source', 'Date_sourced']
)

data_point_name_map = {
    'Full legal name': 'full_legal_name',
    'Legal form': 'legal_form',
    'Registered address': 'registered_address',
    'Principal business address (may be the same as registered address)':'principal_business_address',
    'Business description (SIC codes)': 'business_description',
    'Name of key executives': 'key_executives',
    'Registration authority': 'registration_authority',
    'Registration number': 'registration_number',
    'Registration date': 'registration_date',
    'Registration status': 'registration_status',
    # 'Regulator (only for financial institutions)': 'regulator',
    'Identification of UBO (Ultimate Beneficial Owner)' : 'ubo',
    'Source of Funds': 'source_of_funds'
}



# In a real application where you select case files, this would be chosen
# using javascript
company_name = 'Diageo'

# Endpoint for receiving and processing messages
@app.route('/api/messages', methods=['POST'])
def process_message():
    # Get the message from the request body
    message = request.json['message']

    response = generate_response(message)
    print(response)

    # Return the response as JSON
    return jsonify({'response': response})


def save_report(report: pd.DataFrame):
    """Scrape the available json data and source of funds data, creating a 'source of truth' table
    that will be stored in the flask script for future use, and which will be referenced by the javascript
    as well as the chat models."""

    print('#' * 40)
    print(report)
    print('#' * 40)
    print(df)

    df.update(report)

    # for col in report.columns:
        # for row in report.index:
            # df.loc[row, col] = copy(report.loc[row, col])

@app.route('/api/report', methods=['POST'])
def generate_and_save_report():
    print('calling generate_and_save_report through the api/report endpoint')
    report = generate_report(company_name=company_name,
                                company_json_filename='Diageo_PLC.txt',
                                source_of_funds_documents='None',
                                source_of_funds='Source of funds not provided')
    save_report(report)

    # return {data_point_name: df.loc[data_point_name, 'Data_point'] for data_point_name in df.index}
    
    json_report = {value: df.loc[key, 'Data_point'] for key, value in data_point_name_map.items()}


    # json_report = {'full_legal_name' : 'DIAGEO_PLC',
                #    'registered_address' : 'Millbank'}

    print(json_report)

    # return {'full_legal_name': df.loc['Full legal name', 'Data_point']}
    return json_report




test = 0

# Function to generate a response based on the message
def generate_response(message):
    # global test
    # test += 1
    
    # print(test)
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
    # message = main_chat_model
    # message += f'{test=}'
    return message

if __name__ == '__main__':
    app.run(debug=True)