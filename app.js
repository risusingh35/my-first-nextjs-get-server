const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const connectDB = require("./src/config/dbConfig");
const errorLogger = require("./src/middlewares/errorLogger");
const userRoutes = require("./src/routes/userRoutes");
const authRoutes = require("./src/routes/authRoutes");
const profilerRoute = require("./src/routes/profilerRoute");
const readStreamRoutes = require("./src/routes/readStreamRoutes");
// Ensure the logs directory exists
const logDir = path.join(__dirname, "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/profiler", profilerRoute);
app.use("/api/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/readlargefilestream", readStreamRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});
// app.get('/error', (req, res, next) => {
//   console.log("get Home Route");
//   const error = new Error('Something went wrong!');
//   next(error);
// });
const PORT = process.env.PORT || 4001;
app.use(errorLogger);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
