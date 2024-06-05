const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/dbConfig');
const authRoutes = require('./src/routes/authRoutes');
const cors=require('cors')
const userRoutes=require('./src/routes/userRoutes')
const errorLogger = require('./src/middlewares/errorLogger');
const path = require('path');
const fs = require('fs');

// Ensure the logs directory exists
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}
dotenv.config();
connectDB();

const app = express();
app.use(cors())
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/users', userRoutes);
app.get('/', (req, res) => {
  res.send('API is running...');
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
