// profilerRoute.js
const express = require("express");
const { Worker } = require("worker_threads");
const {
  simulateIO,
  cpuIntensiveTask,
  matrixMultiplication,
} = require("../services/profilerService");
const path = require("path");
const router = express.Router();
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const matrix2 = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];
// router.get("/cpu-intensive-worker", (req, res) => {
//   const worker = new Worker(
//     path.resolve(__dirname, "../workers/profilerWorker.js")
//   );

//   worker.on("message", (result) => {
//     console.log("worker result", result);
//     res.json({ result });
//   });

//   worker.on("error", (error) => {
//     console.log("worker error", error);
//     res.status(500).json({ error: error.message });
//   });

//   worker.on("exit", (code) => {
//     console.log("worker exit code", code);
//     if (code !== 0) {
//       console.error(`Worker stopped with exit code ${code}`);
//     }
//   });
// });
router.get("/cpu-intensive-worker", (req, res) => {
    const worker = new Worker(
      path.resolve(__dirname, "../workers/MatrixMultiplication.js")
    );
  
    worker.on("message", ({ result, duration }) => {
      let data = { result, duration: duration, method: "worker-thread" };
      console.log("result:", data);
      res.json({ result: data });
    });
  
    worker.on("error", (error) => {
      console.error("Worker error:", error);
      res.status(500).json({ error: "An error occurred in the worker thread." });
    });
  
    worker.postMessage({ matrix1, matrix2 });
  });

router.get("/cpu-intensive-no-worker", async (req, res) => {
  try {
    const start = performance.now();

    const result = await matrixMultiplication(matrix1, matrix2);
    // const result = await cpuIntensiveTask();
    const end = performance.now();
    let data = { result, duration: end - start, method: "main-thread" };
    console.log("result:", data);

    res.json({ result: data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      error: "An error occurred while processing the CPU-intensive task.",
    });
  }
});

router.get("/simulate-io", async (req, res) => {
  try {
    const result = await simulateIO();
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
