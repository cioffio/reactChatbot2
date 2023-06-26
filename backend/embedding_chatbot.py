from langchain.prompts import PromptTemplate
from langchain.document_loaders import PyPDFLoader
from langchain.embeddings import OpenAIEmbeddings
from langchain.chat_models import ChatOpenAI
from langchain.indexes import VectorstoreIndexCreator
from langchain.chains import ConversationalRetrievalChain
from langchain.vectorstores import Annoy
import openai


# Set directory containing data documents
data_path = 'data/'

### Load company JSON data as a string 
json_data_filename = 'Diageo_PLC.txt'
json_string = ''
with open(f'{data_path}{json_data_filename}', "r") as json_data:
       result = json_data.readlines()

for line in result:
    if '*' not in line:
        json_string += line

## Adding embedding functionality from Bootcamp 4 notebook
### Prompt Template & Messages
_template = """Given the following chat history and a follow up question, rephrase the follow up question to be a standalone question. If the question does not relate to the chat history, do not amend the follow up question.
If the chat history contains a KYC report, reflect this in the standalone question.
Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:"""
CONDENSE_QUESTION_PROMPT = PromptTemplate.from_template(_template)


template = """You are a friendly, helpful AI assistant that helps an Analyst working at a financial institution complete a KYC check on a customer. You should answer the analyst's query where possible, but you can ask clarification questions if necessary.

Your understanding of the KYC process should be based on the manual provided via embeddings in the context below. Do not mention this to the analyst.
Your source of data on specific companies is provided in the data below and follows the context. Do not mention this to the analyst.
Your information on the source of funds should use the source of funds summary below the data, which was created by another chatbot based on an analysis of documents that the user has provided. If the source of funds is "No source of funds provided", then that means the user has not yet provided documents.

Question: {question}
=========
Context: {context}
=========
JSON Data: 
{data}
=========:
Source of funds: {source_of_funds}
"""

QA_PROMPT = PromptTemplate(template=template, input_variables=["question", "context", "data", "source_of_funds"])

loaders = [
    # TextLoader('Itsu_limited.txt'),
    # PyPDFLoader('AML KYC Desktop Procedures V5.0 - Cleaned.pdf'),
    PyPDFLoader(f'{data_path}AML KYC Process Manual V5.3 - Cleaned.pdf')
]

### Create a vector store via the OpenAI Embeddings Model
def initialise_model(api_key,
                     loaders=loaders,
                     condense_question_prompt=CONDENSE_QUESTION_PROMPT,
                     qa_prompt=QA_PROMPT,
                     model_name='gpt-4-0613'):
    index = VectorstoreIndexCreator(vectorstore_cls=Annoy, embedding=OpenAIEmbeddings(openai_api_key = api_key)).from_loaders(loaders)

    ai_chat = ConversationalRetrievalChain.from_llm(
        ChatOpenAI(temperature=0, model_name=model_name, openai_api_key = openai.api_key),
        retriever=index.vectorstore.as_retriever(search_type="mmr", search_kwargs={"k": 25, "lambda_mult":1}),    
        verbose=False, 
        return_source_documents=True,
        condense_question_prompt=CONDENSE_QUESTION_PROMPT,
        combine_docs_chain_kwargs={'prompt': QA_PROMPT}
    )
    return ai_chat

def get_response_embedding_chatbot(prompt, ai_chat, chat_history, source_of_funds, data=json_string):
    result = ai_chat({"question": prompt,
                      "chat_history": chat_history,
                      "data": data,
                      "source_of_funds": source_of_funds})
    print(f'{source_of_funds=}')

    chat_history.append((prompt, result["answer"])) 
    return result["answer"]