const name = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alter.js')
require('./7-mind-grenade.js')
console.log(data)
console.log(name)

sayHi('Susan')
sayHi(name.John)
sayHi(name.Peter)

//ADVANCED
const os = require('os')
//infor about common user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log('The system update is ${os.uptime()} seconds')

//total memory
const currentos = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentos)

//seperator
const path = require('path')
console.log(path.sep)
const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'testfolder')
console.log(absolute)

