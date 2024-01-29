import worker_threads from "node:worker_threads";
// n should be received from main thread
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
    // To check null in case or error
    // if (Math.random() > 0.5) {
    //     throw new Error("Error!");
    // }
    worker_threads.parentPort.postMessage(nthFibonacci(worker_threads.workerData));
};

sendResult();
