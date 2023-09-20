const Buffer = require('buffer').Buffer;

var _Name = Buffer.from(['M', 'a', 'h', 'a', 'k']);

console.log(`Length of Name Buffer : ${_Name.length}`);
console.log(`Buffered Data : ${_Name.toString('utf-8')}`);