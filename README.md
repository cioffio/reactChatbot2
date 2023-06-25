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

To start the React development server, use the following command:

```
npm start
```

This will launch the React application in development mode. You can access the application in your browser at http://localhost:3000.

The React development server is configured to proxy API requests to the Flask backend, which is running on http://localhost:5000. The proxy configuration is specified in the package.json file.

To start the Flask backend separately, you can use the following command:

```
npm run start-backend
```

This command navigates to the backend directory (assuming it exists at the same level as the React app), and runs the Flask application. Make sure you have the necessary Flask dependencies installed in the backend directory.

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