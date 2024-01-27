const parseEnv = () => {
    // Write your code here
    const res = Object.entries(process.env)
        .filter(([key, _]) => key.startsWith("RSS_"))
        .map(([key, value]) => `${key}=${value}`)
        .join("; ");
    console.log(res);
};

parseEnv();
