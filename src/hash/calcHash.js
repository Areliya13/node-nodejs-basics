import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";
import crypto from "node:crypto";

const urlToPath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(urlToPath);
const pathToFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    // Write your code here
    const data = await fs.readFile(pathToFile);
    const dataHash = crypto.createHash("sha256").update(data).digest("hex");
    console.log(dataHash);
};

await calculateHash();
