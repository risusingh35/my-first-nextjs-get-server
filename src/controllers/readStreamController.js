// readStreamController.js
const readStreamService = require('../services/readStreamService');

const readStream = async (req, res) => {
    try {
        console.log('ReadStream called...');
        const fileData = await readStreamService.readFileStream();
        res.send(fileData);
    } catch (error) {
        console.error('Error while reading stream:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
};

module.exports = {
    readStream
};
