const os = require('os');

console.log(os.userInfo());

console.log(os.uptime());

const currentOSSettings = {
    name: os.type(),
    memory: os.totalmem(),
    freeMemory: os.freemem()
};

console.log(currentOSSettings);

