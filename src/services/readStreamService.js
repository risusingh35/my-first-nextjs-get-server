const fs = require('fs');
const path = require('path');

const readFileStream = () => {
    return new Promise((resolve, reject) => {
        const filePath = path.join(__dirname, '..', 'public', '10mb.txt'); // Adjust the path here
        const readStream = fs.createReadStream(filePath);
        let fileData = '';
        let fileSizeBytes = 0;

        readStream.on('data', chunk => {
            fileData += chunk;
            fileSizeBytes += chunk.length;
        });

        readStream.on('end', () => {
            // Count the number of characters in the file data
            const charCount = fileData.length;
            // Convert file size to megabytes
            const fileSizeMB = fileSizeBytes / (1024 * 1024);
            resolve({ fileData, fileSizeMB: fileSizeMB.toFixed(2), charCount });

        });

        readStream.on('error', err => {
            reject(err);
        });
    });
};

module.exports = {
    readFileStream
};
