What is a Stream?
Stream = data that flows piece by piece instead of all at once

Simple analogy:
Without stream: Fill an entire bucket with water → carry it → pour it — Wait for bucket to fill completely first

With stream: Water flows through a pipe directly — Starts flowing immediately, no waiting

Why Node.js needs streams:
javascript
// WITHOUT stream - loads entire file in RAM
const data = fs.readFileSync('bigfile.txt') // 1GB file = 1GB RAM used 😱

// WITH stream - loads small chunks one by one
const stream = fs.createReadStream('bigfile.txt') // only small chunk in RAM ✅
4 types — just names for now:
Type	Simple meaning
Readable	Only read data
Writable	Only write data
Duplex	Read + Write both
Transform	Read + modify + Write
One line to remember:
Streams = handle big data in small chunks — like watching a movie while it's still downloading 🎬

When you study streams deeply in ProCodrr — come back and tell me. I'll give you full explanation + exercises at that point! 💪

What did you learn next? 🚀

# Types of Streams in Node.js

Node.js streams allow you to work with data efficiently by processing it incrementally, without loading the entire data into memory. Streams are particularly useful for handling large datasets or continuous data flows. There are four types of streams in Node.js:

## 1. Readable Streams
Readable streams are used to **read data** from a source, such as reading files or receiving HTTP requests.

## 2. Writable Streams
Writable streams are used to **write data** to a destination, such as writing to a file or sending HTTP responses.

## 3. Duplex Streams
Duplex streams are streams that can **both read and write data**. These are useful for situations like network communication, where you both send and receive data.

## 4. Transform Streams
Transform streams are a special type of duplex stream where the **output is a transformation of the input**. They modify or process the data as it passes through the stream, such as compressing or encrypting data.
