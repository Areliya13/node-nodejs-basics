import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const urlToPath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(urlToPath);
const pathToFile = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
    // Write your code here
    try {
        await fs.unlink(pathToFile);
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await remove();
