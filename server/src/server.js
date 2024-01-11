const mongoose = require("mongoose");
const app = require("./app");

const MONGO_URL =
  "mongodb+srv://financeTracker:HWwi5hXl8GmT4qrv@finance-tracker.ulka8uy.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8000;

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

startServer();
