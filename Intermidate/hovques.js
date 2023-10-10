var arr=["mahak","ved","sir"];

console.log(arr[Math.floor(Math.random() * arr.length)]);
const prev = arr[Math.floor(Math.random() * arr.length)];
const next = arr[Math.floor(Math.random() * arr.length)];
if prev == next
    arr[next + 1]