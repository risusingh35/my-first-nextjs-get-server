// profilerService.js
const cpuIntensiveTask = async () => {
  // Simulate a CPU-intensive task
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
      result += i;
  }
  return result;
};

const simulateIO = async () => {
  // Simulate an I/O operation
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('I/O operation completed');
      }, 1000);
  });
};

module.exports = { cpuIntensiveTask, simulateIO };
