const os = require('os')
//info about current user
const user =os.userInfo();
console.log(user)
//method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name : os.type(),
    totalMem: os.totalmem(),
    release: os.release(),
    freeMen : os.freemem()
}
console.log(currentOS)