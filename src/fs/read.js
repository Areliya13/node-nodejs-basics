import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const urlToPath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(urlToPath);
const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const data = await fs.readFile(pathToFile, { encoding: "utf8" });
    console.log(data);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
