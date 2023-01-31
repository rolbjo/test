const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

console.log(`Player: ${args.name}; Credits: ${args.c}`);
