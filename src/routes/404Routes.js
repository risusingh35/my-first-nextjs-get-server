const express = require('express');
const router = express.Router();

router.all('*', (req, res) => {
    res.status(404).json({
        message: `Can't find ${req.originalUrl} this route`,
    });
});

module.exports = router;
