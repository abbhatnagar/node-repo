const {readFileSync, writeFileSync, readFile, writeFile} = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);
//flag a will append to the file
writeFileSync('./content/result.txt', `here is the resultant file with text ${first} ## ${second}`, {flag:'a'});

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) return;
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err) return;
        const second = result;
        writeFile('./content/result-async.txt', `first: first ${first}`, (err, result) => {
            if(err) return;
            console.log(result);
        })
    })
})