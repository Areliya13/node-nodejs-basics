const parseArgs = () => {
    // Write your code here
    const allArgs = process.argv.slice(2);
    const targetList = [];
    for (let i = 0; i < allArgs.length; i += 2) {
        const name = allArgs[i].slice(2);
        const value = allArgs[i + 1];
        targetList.push(`${name} is ${value}`);
    }
    const res = targetList.join(", ");
    console.log(res);
};

parseArgs();
