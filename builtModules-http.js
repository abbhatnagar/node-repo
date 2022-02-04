const http = require('http');
const _ = require('lodash'); //adding and using an ext dependency 
const arr = [1, [2 ,3]];
console.log(_.flattenDeep(arr));
// console.log(http);

const server = http.createServer((req, res) => {
    console.log(req);
    if(req.url == '/')res.write('hey, welcome back');
    else if(req.url == '/test') res.write('this is a test page')
    res.end();
})

server.listen(5000);