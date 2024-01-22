// Define a simple function and object
function sayHello() {
    console.log(`This inside function: ${this}`); // 1. Default binding - global object in non-strict mode
}

const person = {
    name: "John",
    greet: function () {
        console.log(`This inside object method: ${this}`); // 2. Object binding - 'person' object
        sayHello(); // 3. Implicit binding - global object again
    },
    arrowGreet: () => {
        console.log(`This inside arrow function: ${this}`); // 4. Lexical binding - retains outer `greet` context (person)
    },
};

// Calling functions with different contexts
sayHello.call(person); // 5. Explicit binding with call() - sets 'this' to 'person'
person.greet();
person.arrowGreet();

