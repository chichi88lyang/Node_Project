//How to read a file
const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
})

// detailled

const { readFile, writeFile } = require('fs')
console.log('start')

readFile('./content/first.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
})
console.log('done with this task')
console.log('starting the new one')