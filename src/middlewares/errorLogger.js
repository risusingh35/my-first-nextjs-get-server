const winston = require('winston');
const path = require('path');

// Function to get the current date in YYYY-MM-DD format
const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2);
    const day = (`0${date.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
};

// Configure Winston logger
const logger = winston.createLogger({
    level: 'error',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(({ timestamp, level, message }) => `${timestamp} - ${level.toUpperCase()}: ${message}`)
    ),
    transports: [
        new winston.transports.File({ filename: path.join(__dirname, `../logs/error-${getDate()}.log`) })
    ]
});

// Error Logger Middleware
const errorLogger = (err, req, res, next) => {
    logger.error(`${req.method} ${req.url} - ${err.message}`);
    next(err);
};

module.exports = errorLogger;
