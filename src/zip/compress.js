import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import zlib from "node:zlib";

const urlToPath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(urlToPath);
const pathToFile = path.join(__dirname, "files", "fileToCompress.txt");
const pathToZip = path.join(__dirname, "files", "archive.gz");

const compress = async () => {
    // Write your code here
    const readableStream = fs.createReadStream(pathToFile);
    const writableStream = fs.createWriteStream(pathToZip);

    const gZip = zlib.createGzip();

    readableStream.pipe(gZip).pipe(writableStream);
};

await compress();
