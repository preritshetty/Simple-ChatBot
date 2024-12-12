# AI Chatbot

This project is a simple AI-powered chatbot that takes user input (first name, last name, and a question) and responds with an AI-generated answer. The backend is built using FastAPI and Azure AI services, while the frontend is a minimal HTML/CSS/JavaScript setup.

---

## Features

- Interactive chat interface where users can:
  - Enter their first name and last name.
  - Ask a question to the AI chatbot.
- AI-generated responses powered by Azure OpenAI.
- A modern and clean UI with responsive design.
- Built with:
  - **FastAPI** for the backend.
  - **Azure AI Projects** for generating responses.
  - **HTML/CSS** for the frontend.

---

## Project Structure

```
project/
├── static/
│   ├── css/
│   │   └── styles.css          # Styling for the frontend
│   └── js/
│       └── script.js          # Client-side JavaScript for API interaction
├── templates/
│   └── index.html             # Main HTML file for the frontend
├── chat.py                    # FastAPI backend server
└── README.md                  # Project documentation
```

---

## Prerequisites

1. **Python 3.8+**
2. **Azure Account** with an active OpenAI service and Azure AI Projects configured.
3. **Node.js (Optional)** for advanced static file handling or running live-server during development.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies

Ensure you have FastAPI and related dependencies installed.

```bash
pip install fastapi uvicorn azure-identity azure-ai-projects
```

### 3. Directory Structure

Ensure the following folder structure is maintained:

```
project/
├── static/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
├── templates/
│   └── index.html
├── chat.py
```

Place `styles.css` in `static/css/`, `script.js` in `static/js/`, and `index.html` in `templates/`.

### 4. Azure Setup

- Create an Azure AI Project in your Azure Portal.
- Retrieve the **connection string** from Azure AI Projects.
- Replace the placeholder `project_connection_string` in `chat.py` with your actual connection string.

```python
project_connection_string = "your_connection_string_here"
```

### 5. Run the Application

Run the FastAPI server locally:

```bash
uvicorn chat:app --reload
```

The application will be available at: [http://127.0.0.1:8000](http://127.0.0.1:8000)

### 6. Open the Frontend

- Use any browser to navigate to `http://127.0.0.1:8000`.
- Enter your first name, last name, and question in the chat interface.
- Press "Send" to get the AI-generated response.

---

## Usage

1. Open the web interface.
2. Enter your first and last name.
3. Type a question in the "Your Question" input field.
4. Click "Send" to receive an AI-generated response styled as a "techno punk rocker."

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: FastAPI, Python
- **AI Services**: Azure AI Projects

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---
