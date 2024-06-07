const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const helmet = require("helmet");
const connectDB = require("./src/config/dbConfig");
const errorLogger = require("./src/middlewares/errorLogger");
const userRoutes = require("./src/routes/userRoutes");
const authRoutes = require("./src/routes/authRoutes");
const profilerRoute = require("./src/routes/profilerRoute");
const readStreamRoutes = require("./src/routes/readStreamRoutes");
const FourNot4Route = require("./src/routes/404Routes");
const mailerService =require('./src/services/mailerService')
// Ensure the logs directory exists
const logDir = path.join(__dirname, "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}
dotenv.config();
connectDB();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/profiler", profilerRoute);
app.use("/api/auth", authRoutes);
app.use("/users", userRoutes);

app.use("/readlargefilestream", readStreamRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("*", FourNot4Route);
// app.get('/error', (req, res, next) => {
//   console.log("get Home Route");
//   const error = new Error('Something went wrong!');
//   next(error);
// });

// const GMAIL_EMAIL = process.env.GMAIL_EMAIL;
// const subject= 'Special Offer for You!'
// const name = 'RISU SINGH';
// const message = 'We are excited to share the latest updates with you!';
// const offer = 'Get 20% off on your next purchase. Use code: SAVE20 at checkout.';
// const recipientEmail = GMAIL_EMAIL; 

// mailerService.sendEmail(subject,recipientEmail, name, message,offer);
app.use(errorLogger);
module.exports = app;
