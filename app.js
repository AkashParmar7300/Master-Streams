import fs from 'fs/promises'

const a =await  fs.readFile("c:\\Users\\dell\\OneDrive\\Desktop\\ff.mp4 - Shortcut.lnk")

fs.writeFile( "base.mp4"  ,a)
//console.log(a.toString())
console.log(a.byteLength)