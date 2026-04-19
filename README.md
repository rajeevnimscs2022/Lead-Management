Lead Management System

A simple and efficient Lead Management System built using HTML, CSS, JavaScript (Frontend) and Node.js + Express (Backend).
This project allows users to manage leads with basic CRUD operations.

Tech Stack:-

Frontend:-
HTML5
CSS3
JavaScript

Backend:-
Node.js
Express.js

Features# Lead Management System

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express

## Features
- Add leads
- View leads
- Edit leads
- Delete leads
- Validation included

## How to Run

### Backend
cd backend
npm install
node Backend/server.js

### Frontend
go to index.html click on run and
Open index.html in browser

## Assumptions
- Data stored in memory
- No authentication added

Add Leads
Users can add new leads with details like name, email, contact number, and source.

View Leads
Displays all leads in a structured table format.

Edit Leads
Modify existing lead details.

 Delete Leads
Remove unwanted leads from the system.

Form Validation
Ensures:
Required fields are filled
Valid email format
Proper contact number format

Project Structure
Lead-Management-System/
│
├── backend/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md

How to Run the Project
 1. Clone the Repository
git clone https://github.com/your-username/lead-management-system.git
cd lead-management-system
 2. Run Backend
cd backend
npm install
node server.js

Server will start at:

http://localhost:3000
 3. Run Frontend
Go to frontend folder
Open index.html in your browser

OR

Right click → Open with Live Server (recommended)
 API Endpoints
Method	Endpoint	Description
GET	/leads	Fetch all leads
POST	/leads	Add new lead
PUT	/leads/:id	Update lead
DELETE	/leads/:id	Delete lead

Assumptions
Data is stored in memory (array)
Data will be lost when server restarts
No authentication or authorization implemented
Frontend and backend run locally
