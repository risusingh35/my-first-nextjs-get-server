const { parentPort } = require('worker_threads');
const { performance } = require('perf_hooks');

const cpuIntensiveTask = () => {
  let result = 0;
  for (let i = 0; i < 1e9; i++) {
    result += i;
  }
  return result;
};

const start = performance.now();
const result = cpuIntensiveTask();
const end = performance.now();

parentPort.postMessage({ result, duration: end - start ,method: 'worker-thread' });
