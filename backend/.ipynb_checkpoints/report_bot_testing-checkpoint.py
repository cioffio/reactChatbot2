from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
from langchain.prompts import PromptTemplate
import openai
from langchain.chains import LLMChain

import pandas as pd
from io import StringIO

data_path = 'data/'

report_template = """You have been provided data on multiple companies below. 
You may have also been provided a source of funds summary of a single company. Only use this source of funds summary to populate the "source of funds" field, and no other. If this source of funds summary is present, then it was previously created by you, using documents uploaded by the user.

Question: For the company with name "{company_name}", return a table with the following structure: 
Column 1 name = Data_point_name. Column 1 entries = [Full legal name, Legal form, Registered address, Principal business address (may be the same as registered address), Business description (SIC codes), Name of key executives, Registration authority, Registration number, Registration date, Registration status, Regulator (only for financial institutions), Identification of UBO (Ultimate Beneficial Owner), Source of Funds] 
Column 2 name = Data_point. Column 2 entries = The corresponding value of Data_point_name, found using the below data or source of funds.
Column 3 name = Data_source. Column 3 entries = Source of the data, if a data point was provided.
Column 4 name = Date_sourced
Format the table as csv. Enclose each entry x with " as "x". Only use data provided in this prompt, do not use data from the internet which you have not been directly provided.
Where a given entry has multiple parts, separate them with commas instead of quotation marks.
========
Data: {data}
========
Source of funds document(s) name(s): {source_of_funds_documents}
Source of funds: {source_of_funds}
"""

report_prompt = PromptTemplate.from_template(report_template)

model_name = 'gpt-3.5-turbo-0613'

llm = ChatOpenAI(temperature=0, model_name=model_name, openai_api_key = openai.api_key)

chain = LLMChain(llm=llm,
                 prompt=report_prompt)


json_string = ''
company_name = 'Diageo'
company_json_filename = 'Diageo_PLC.txt'
source_of_funds_documents='None'
source_of_funds='Source of funds not provided'

with open(f'{data_path}{company_json_filename}', "r") as json_data:
    result = json_data.readlines()

for line in result:
    if '*' not in line:
        json_string += line

result = chain.run(
    {
        'company_name': company_name,
        'data': json_string,
        'source_of_funds_documents': source_of_funds_documents,
        'source_of_funds': source_of_funds
    }
)