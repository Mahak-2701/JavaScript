// Buffer Module in Node.js for performing operations on binary data.
const Buffer = require('buffer').Buffer;

var arr = [55,15,73,98,91,44];
var ArrayBuf = Buffer.from(arr);
console.log(ArrayBuf);

var Buf = Buffer.alloc(128);
Buf.write('This is a buffer example');

// Buf.fill(Arr);
console.log(Buf.byteLength);
console.log(Buffer.from('yet another buffer').toLocaleString());
console.log(Buf.length);
console.log(Buf.toString('UTF-8'));