import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const urlToPath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(urlToPath);
const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
    // Write your code here
    const readableStream = fs.createReadStream(pathToFile);
    readableStream.pipe(process.stdout);
};

await read();
