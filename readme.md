# Text Summarizer App

The **Text Summarizer App** is a web application that takes user-input text, processes it, and returns a concise summary. The app uses the **Hugging Face API** for text summarization and is powered by an **Express.js server**. The frontend is built with **HTML**, **CSS**, and **JavaScript**.

## Features

- **Text Input**: Allows users to input any text in a provided text area.
- **Summarization**: The app processes the input text using the Hugging Face API and returns a summary.
- **Responsive Design**: The app features a responsive UI for seamless interaction across devices.
- **Backend with Express.js**: The app uses Express to handle API requests and integrate with the Hugging Face API.

## Folder Structure

```
/node_modules            # Folder for installed Node.js dependencies.
├── public
│   ├── index.html       # The main HTML file for the app's user interface.
│   ├── stylesheet.css   # The CSS file for styling the page.
│   └── script.js        # The JavaScript file for handling text input and API calls.
├── .gitignore           # Specifies files and directories to ignore in version control.
├── .env                 # Environment variables for the app (e.g., API keys).
├── index.js             # The Express server file that handles routing and API interaction.
├── package.json         # Node.js project metadata and dependencies.
├── package-lock.json    # Locks the version of installed dependencies.
└── summarize.js         # The module that interacts with the Hugging Face API to summarize text.
```

## Technologies Used

- **HTML**: Provides the structure and layout of the webpage.
- **CSS**: Used for styling the page and ensuring a responsive design.
- **JavaScript**: Handles frontend logic, such as sending requests to the backend and displaying summaries.
- **Node.js & Express**: Powers the backend, handling API requests and managing server-side logic.
- **Hugging Face API**: Used to summarize the input text.
- **Postman**: Utilized to test and document API endpoints for easier development.

## Installation

To run the **Text Summarizer App** locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the project directory**:
   ```bash
   cd text-summarizer
   ```
3. **Install backend dependencies**:
   ```bash
   npm install
   ```
4. **Create an `.env` file**: Add the Hugging Face API key to the `.env` file:
   ```
   HUGGING_FACE_API_KEY=your_api_key_here
   ```
5. **Start the application**:
   ```bash
   npm start
   ```
6. **Access the app**: Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the frontend and interact with the app.

## How It Works

1. **User Input**: The user enters text into a text area on the frontend (HTML).
2. **API Request**: Upon submission, the frontend sends the input text to the Express backend via an API request.
3. **Text Summarization**: The backend (in `summarize.js`) communicates with the Hugging Face API to summarize the input text.
4. **Output**: The summarized text is returned to the frontend and displayed to the user.

## Conclusion

The **Text Summarizer App** provides an easy-to-use, responsive platform for summarizing lengthy text into concise summaries using advanced AI technology. With a user-friendly frontend and a powerful backend powered by Express.js, this application demonstrates how to integrate machine learning models into a web-based application. You can contribute to the project, expand its features, or integrate additional models to enhance its functionality.

Feel free to fork this repository and start using it for your text summarization needs. Enjoy exploring the power of AI in text summarization!
