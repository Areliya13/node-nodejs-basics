import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const urlToPath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(urlToPath);
const pathToFolder = path.join(__dirname, "files");

const list = async () => {
    // Write your code here
    try {
        const listOfFileNames = await fs.readdir(pathToFolder, { recursive: true });
        listOfFileNames.forEach((fileName) => console.log(fileName));
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await list();
