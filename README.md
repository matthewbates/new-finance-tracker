Finance Tracker

A fullstack, mobile-responsive web application designed to help users track and categorize their expenses, set budgets, and gain better financial insights.

Live Demo

[Insert Live Link Here]

Features

User Authentication:

Secure signup and login with password hashing.

Comprehensive error handling for username and password requirements.

Expense Tracking:

Add transactions including cost, category, date, and amount.

Transactions are persisted and organized by day, month, and year.

Data Visualization:

Visualize spending patterns using ApexCharts.js.

Month-to-month expenditure breakdowns by category.

Custom Categories:

Add personalized expense categories beyond the default options.

Budget Management:

Set monthly spending limits for each category.

Receive notifications when nearing or exceeding category budgets.

Tech Stack

Frontend:

React

CSS / Styled Components

ApexCharts.js

Backend:

Node.js

Express.js

Database:

[Specify database: MongoDB, MySQL, etc. — Update as applicable]

Installation & Setup

Clone the repository:

git clone https://github.com/yourusername/finance-tracker.git
cd finance-tracker

Install backend dependencies:

cd backend
npm install

Install frontend dependencies:

cd ../frontend
npm install

Configure environment variables:

Create a .env file in the backend with required secrets (JWT_SECRET, DB connection string, etc.).

Run the application:

cd backend
npm start

cd frontend
npm start

Future Enhancements

AI-driven budgeting tips and spending suggestions

Exportable reports (PDF, Excel)

Multi-currency support
