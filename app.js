import fs from 'fs'

 /*console.time()
const a =await  fs.readFile("c:\\Users\\dell\\OneDrive\\Desktop\\ff.mp4 - Shortcut.lnk")

//console.log(a.toString())
console.log(a.byteLength)c:\Users\dell\OneDrive\Desktop\fff.mp4
console.timeEnd()*/
console.time()
const read =fs.createReadStream("c:\\Users\\dell\\OneDrive\\Desktop\\fff.mp4",{highWaterMark : 100*1024*1024})

read.on('data',(chunkbuffer)=>{
  console.log(chunkbuffer)
  console.log(chunkbuffer.byteLength)

})
console.timeEnd()