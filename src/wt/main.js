import path from "path";
import url from "node:url";
import { cpus } from "os";
import { Worker } from "worker_threads";

const urlToPath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(urlToPath);
const pathToWorkerFile = path.join(__dirname, "worker.js");

const fibonacciWorkerService = (number) =>
    new Promise((resolve) => {
        const worker = new Worker(pathToWorkerFile, { workerData: number });

        worker.on("message", (data) =>
            resolve({
                status: "resolved",
                data,
            })
        );

        worker.on("error", () =>
            resolve({
                status: "error",
                data: null,
            })
        );
    });

const performCalculations = async () => {
    const workersPool = [];
    const lengthOfArray = cpus().length;
    for (let i = 0; i < lengthOfArray; i++) {
        workersPool.push(fibonacciWorkerService(10 + i));
    }

    const result = await Promise.all(workersPool);
    console.log(result);
};

await performCalculations();
