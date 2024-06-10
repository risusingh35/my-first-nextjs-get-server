const multer = require('multer');
// this middleware will use in the Route where multipart send from ui 
// Configure multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = upload;
