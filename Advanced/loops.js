// Traditional for loop
console.log("Traditional for loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For...in loop (used for iterating over object properties)
console.log("\nFor...in loop:");
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key, obj[key]);
}