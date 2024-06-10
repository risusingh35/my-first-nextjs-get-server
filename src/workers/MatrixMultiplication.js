const { parentPort } = require("worker_threads");
const { matrixMultiplication } = require("../services/profilerService");

parentPort.on("message", ({ matrix1, matrix2 }) => {
  const start = Date.now();
  const result = matrixMultiplication(matrix1, matrix2);
  const end = Date.now();
  const duration = end - start;

  parentPort.postMessage({ result, duration });
});
