// Constructor function for the 'Person' object
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the 'Person' prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
 

// Constructor function for the 'Student' object, inheriting from 'Person'
function Student(name, age, grade) {
    // Call the 'Person' constructor to initialize 'name' and 'age'
    Person.call(this, name, age);
    this.grade = grade;
}

// Inheriting 'Person' prototype methods
Student.prototype = Object.create(Person.prototype);

// Adding a method specific to the 'Student' prototype
Student.prototype.study = function () {
    console.log(`${this.name} is studying hard.`);
};

