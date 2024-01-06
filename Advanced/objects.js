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
