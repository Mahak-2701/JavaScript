// Constructor function for the 'Person' object
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the 'Person' prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
 