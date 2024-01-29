import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const urlToPath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(urlToPath);
const pathToFile = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
    // Write your code here
    const writableStream = fs.createWriteStream(pathToFile);
    process.stdin.pipe(writableStream);
};

await write();
