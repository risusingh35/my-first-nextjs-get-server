const iconv = require('iconv-lite');
const dns = require('dns');

const fileConverter = async (file, currentEncoding, targetEncoding) => {
    console.log('file, currentEncoding, targetEncoding', file, currentEncoding, targetEncoding);
    try {
        // Convert buffer to string with current encoding
        const fileString = iconv.decode(file.buffer, currentEncoding);

        // Convert string to buffer with target encoding
        const convertedBuffer = iconv.encode(fileString, targetEncoding);

        return convertedBuffer;
    } catch (error) {
        throw new Error('Error converting file:', error);
    }
};

const getIPAddress = async (websiteName) => {
    console.log('websiteName', websiteName);
    return new Promise((resolve, reject) => {
        dns.lookup(websiteName, (err, address, family) => {
            if (err) {
                reject(err);
            } else {
                dns.reverse(address, (err, hostnames) => {
                    if (err) {
                        reject(err);
                    } else {
                        const data = {
                            websiteName,
                            ip: address,
                            hostnames: hostnames[0],
                            family
                        };
                        resolve(data);
                    }
                });
            }
        });
    });
};

module.exports = { fileConverter, getIPAddress };
