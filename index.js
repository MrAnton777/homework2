const yargs = require("yargs/yargs");
const {hideBin} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
let filepath1 = process.argv.slice(2)
const path = require('path')
const fs = require('fs')

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
let nscore = 0

function check(){
    rl.question('', (answer) => {
        if (answer != num){
            console.log('Нет')
            nscore += 1
            check()
        }
        if (answer == num){
            rl.close()
            console.log('Угадал')
            fs.appendFile(filepath,`Файл сохранения ${filepath};\nНеудачных попыток${nscore};\nЗагаданное число ${num};`,(err) =>{
                if (err) throw Error
            })

        }
    })
}


let filepath = path.join(__dirname,filepath1 + '')
let content = ''
fs.writeFile(filepath,content,(err) => {
    if (err) throw Error
})



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;}

    
    
const rl = readline.createInterface({ input, output });


const num = getRndInteger(1,2)

check()
