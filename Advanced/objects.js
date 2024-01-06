const car = {
    name: "Dodge Charger",
    age: 2010,
    price: 890229,
};

if ("name" in car) {
    console.log("Name property exists.");
} else {
    console.log("Name property does not exist.");
}

//copy a object 
const clonedCar = { ...car };
console.log(clonedCar);

const propertyCount = Object.keys(car).length;
console.log("Number of properties:", propertyCount);

/*
The Object.keys() method is a built-in function in JavaScript that returns an array of a given object's own enumerable property names. It takes an object as an argument and returns an array containing the keys (property names) of that object.
*/

const obj1 = {
    name: "Kiddo",
    age: 12,
};

const obj2 = {
    name: "Kiddo",
    age: 12,
};

const isEqual = JSON.stringify(obj1) === JSON.stringify(obj2);
console.log("Objects are equal:", isEqual);
// JSON.stringify() method is used to convert both objects into JSON strings. 
//The equality of the strings is then checked to determine if the objects are equal.

//const parsedObject = JSON.parse(json);
//console.log(parsedObject);
//the JSON.parse() function is used to parse the JSON string back into a JavaScript object. 
//The JSON.parse() function is another built-in JavaScript method that deserializes a JSON string into a JavaScript object.

const person = {
    name: "John",
    age: 30,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}.`);
    },
};

console.log(person.name);
person.sayHello();

/* 
Object.assign() is a built-in method in JavaScript that is used to copy the values of all enumerable properties from one or more source objects to a target object. It merges the properties of the source objects into the target object.
Object.assign(target, ...sources)
target: The target object to which the properties will be copied.
sources: One or more source objects from which the properties will be copied.
*/

const target = {
    prop1: 'value1',
    prop2: 'value2'
};

const source = {
    prop2: 'updated value',
    prop3: 'value3'
};

const mergedObject = Object.assign(target, source);

console.log(mergedObject);