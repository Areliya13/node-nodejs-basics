import child_process from "node:child_process";
import path from "node:path";
import url from "node:url";

const urlToPath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(urlToPath);
const pathToFile = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    // Write your code here
    const child = child_process.fork(pathToFile, args);
    child.send(args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 4, 9, "enough?"]);
