import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const urlToPath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(urlToPath);
const pathFromFolder = path.join(__dirname, "files");
const pathToFolder = path.join(__dirname, "files_copy");

const copy = async () => {
    // Write your code here\
    try {
        await fs.cp(pathFromFolder, pathToFolder, { recursive: true, force: false, errorOnExist: true });
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await copy();
