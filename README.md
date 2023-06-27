# myGPT

This is a solution for building a chatbot application using Flask and React. The application utilizes a client-server architecture where the frontend is developed using React, and the backend is implemented with Flask.

## Prerequisites

Before running the application, make sure you have the following software installed on your machine:

1. Node.js and npm (Node Package Manager)
2. Python and Flask

## Installation

To install the required dependencies, navigate to the project's root directory and run the following command:

```
npm install
```

This will install all the necessary packages listed in the package.json file.

## Usage

To create the python virtual environment you should use, navigate to the backend directory and run the following commands:

To create the virtual environment
python -m venv venv

To activate it
venv/Scripts/activate

To install the required dependencies
pip install -r requirements.txt

This might take a while (pip install can be very slow), it took me about 30 minutes to do.

You need to create the file ".flaskenv" in backend/ which contains the following lines, where you should replace ___ with your openai api key:
FLASK_APP=app.py
FLASK_ENV=development
OPENAI_API_KEY=___

You should also create the directory backend/data/ which should contain the necessary data files (obtained separately)

To start the Flask backend, navigate to the frontend directory and use the following command, making sure to have activated the python virtual environment first:

```
npm run start-backend
```

This command navigates to the backend directory (assuming it exists at the same level as the React app), and runs the Flask application.

To start the React development server, navigate to the frontend directory, and use the following command:

```
npm start
```

This will launch the React application in development mode. You can access the application in your browser at http://localhost:3000.

The React development server is configured to proxy API requests to the Flask backend, which is running on http://localhost:5000. The proxy configuration is specified in the package.json file.

## Building the Application

To build the production-ready version of the application, you can use the following command:

```
npm run build
```

This command creates a build directory with optimized and minified files that are ready to be deployed to a web server.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request explaining your changes.

# License

This project is licensed under the MIT License.