import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const urlToPath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(urlToPath);
const pathToFile = path.join(__dirname, "files", "fresh.txt");
const textToFile = "I am fresh and young";

const create = async () => {
    // Write your code here
    try {
        await fs.writeFile(pathToFile, textToFile, { flag: "wx" });
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await create();
