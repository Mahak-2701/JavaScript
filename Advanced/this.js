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

// Example 3: Constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
    this.getDetails = function () {
        console.log(`Make: ${this.make}, Model: ${this.model}`);
    };
}
const myCar = new Car('Toyota', 'Camry');
myCar.getDetails(); // 'this' refers to the instance of the object created by the constructor (myCar)