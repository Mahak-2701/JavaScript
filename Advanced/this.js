// Example 1: Global scope
console.log(this); // 'this' refers to the global object (window in a browser, global in Node.js)

// Example 2: Object method
const person = {
    name: 'John',
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person.greet(); // 'this' refers to the object that owns the method (person)