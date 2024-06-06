// profilerController.js
const profilerService = require("../services/profilerService");

const cpuIntensiveTask = async (req, res) => {
    try {
        console.log('cpuIntensiveTask called...');
        const cpuResult = await profilerService.cpuIntensiveTask();
        console.log('cpuIntensiveTask cpuResult...', cpuResult);
        res.json({ cpuResult });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};

const simulateIO = async (req, res) => {
    try {
        console.log('simulateIO called...');
        const ioResult = await profilerService.simulateIO();
        console.log('simulateIO ioResult...', ioResult);
        res.json({ ioResult });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};

module.exports = { cpuIntensiveTask, simulateIO };
