// fileConverterController.js
const fileConverterService = require("../services/converterService");

const fileConverter = async (req, res) => {
    try {
        const { currentEncoding, targetEncoding } = req.body;
        const file = req.file; 
        const result = await fileConverterService.fileConverter(file,currentEncoding, targetEncoding);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};
const getIPAddress = async (req, res) => {
    try {
        const { websiteName } = req.query;
        const result = await fileConverterService.getIPAddress(websiteName);
        console.log('fileConverter result...', result);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};



module.exports = { fileConverter,getIPAddress };
