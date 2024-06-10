// profilerService.js
const cpuIntensiveTask = async () => {
  return new Promise((resolve, reject) => {
    let result = 0;
    for (let i = 0; i < 1e9; i++) {
      result += i;
    }
    resolve(result);
  });
};

const simulateIO = async () => {
  // Simulate an I/O operation
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I/O operation completed");
    }, 1000);
  });
};
const  matrixMultiplication=(matrix1, matrix2) =>{
  const result = [];
  const n = matrix1.length;
  const m = matrix2[0].length;
  const p = matrix2.length;

  for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j < m; j++) {
      let sum = 0;
      for (let k = 0; k < p; k++) {
        sum += matrix1[i][k] * matrix2[k][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
}
module.exports = { cpuIntensiveTask, simulateIO,matrixMultiplication };
