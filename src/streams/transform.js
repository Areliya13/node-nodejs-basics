import stream from "node:stream";

const transform = async () => {
    // Write your code here
    const transformStream = new stream.Transform({
        transform: (chunk, _, callback) => {
            const strChunk = chunk.toString();
            const reverseChunk = strChunk.split("").reverse().join("");
            callback(null, reverseChunk + "\n");
        },
    });

    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
