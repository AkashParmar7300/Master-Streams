import fs from 'fs/promises'

const a =await  fs.readFile("data.txt")

console.log(a.toString())
