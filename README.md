# Finance Tracker

A fullstack, mobile-responsive web application designed to help users track and categorize their expenses, set budgets, and gain better financial insights.

## Live Demo

[Insert Live Link Here]

## Features

- **User Authentication:**

  - Secure signup and login with password hashing.
  - Comprehensive error handling for username and password requirements.

- **Expense Tracking:**

  - Add transactions including cost, category, date, and amount.
  - Transactions are persisted and organized by day, month, and year.

- **Data Visualization:**

  - Visualize spending patterns using **ApexCharts.js**.
  - Month-to-month expenditure breakdowns by category.

- **Custom Categories:**

  - Add personalized expense categories beyond the default options.

- **Budget Management:**

  - Set monthly spending limits for each category.
  - Receive notifications when nearing or exceeding category budgets.

## Tech Stack

**Frontend:**

- React
- CSS / Styled Components
- ApexCharts.js

**Backend:**

- Node.js
- Express.js

**Database:**

- [Specify database: MongoDB, MySQL, etc. — Update as applicable]

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/finance-tracker.git
   cd finance-tracker
   ```

2. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

4. Configure environment variables:

   - Create a `.env` file in the backend with required secrets (JWT_SECRET, DB connection string, etc.).

5. Run the application:

   ```bash
   cd backend
   npm start
   ```

   ```bash
   cd frontend
   npm start
   ```

## Future Enhancements

- AI-driven budgeting tips and spending suggestions
- Exportable reports (PDF, Excel)
- Multi-currency support

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

Built with passion to help users gain control over their finances.
