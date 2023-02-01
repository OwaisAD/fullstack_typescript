// Class exercise 1

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function greeting(name) {
    console.log(`Hello, ${name}!`);
    readline.close();
}

function processUserInput(cb: CallableFunction) {
    readline.question(`What's your name? `, cb);
}

processUserInput(greeting);

