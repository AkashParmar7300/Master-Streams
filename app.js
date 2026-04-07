import fs from 'fs'

 /*console.time()
const a =await  fs.readFile("c:\\Users\\dell\\OneDrive\\Desktop\\ff.mp4 - Shortcut.lnk")

//console.log(a.toString())
console.log(a.byteLength)c:\Users\dell\OneDrive\Desktop\fff.mp4
console.timeEnd()*/
console.time()
let count=0
const read =fs.createReadStream("c:\\Users\\dell\\OneDrive\\Desktop\\fff.mp4",{highWaterMark : 1*1024*1024})

read.on("data",(chunkbuffer)=>{
//  console.log(chunkbuffer)
  //console.log(chunkbuffer.byteLength)
  fs.appendFileSync(" bas.mp4" , chunkbuffer)
         
  count++;
  })

  read.on( "end",()=>{

     console.log({count})
  })
let readcount =0
const readStream = fs.createReadStream("data.txt" , {highWaterMark : 4})
readStream.on('data' , (chunk)=>{
         console.log(chunk.byteLength)
         readcount++;
})
readStream.on("end" , ()=>{
  console.log(readcount)
})