import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const urlToPath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(urlToPath);
const pathFromFile = path.join(__dirname, "files", "wrongFilename.txt");
const pathToFile = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
    // Write your code here
    let isFileExist = false;
    try {
        await fs.access(pathToFile);
        isFileExist = true;
    } catch (error) {}
    if (isFileExist) {
        throw new Error("FS operation failed");
    }
    try {
        await fs.access(pathFromFile);
    } catch (error) {
        throw new Error("FS operation failed");
    }
    await fs.rename(pathFromFile, pathToFile);
};

await rename();
