const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerMiddleware');
const fileConverterController = require('../controllers/converterController');
router.post('/file',upload.single('file'), fileConverterController.fileConverter); 
router.get('/ip', fileConverterController.getIPAddress); 

module.exports = router;
