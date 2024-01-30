// All JSON related functions.

const originalObject = {
    name: "John Wick",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "destroying"],
    address: {
        street: "123 Main Street",
        city: "Anthony Street",
        country: "USA"
    }
};

// JSON.stringify(): Convert JavaScript object to JSON string
const jsonString = JSON.stringify(originalObject);
console.log("JSON String:", jsonString);

// JSON.parse(): Convert JSON string back to JavaScript object
const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

// JSON.stringify() with a custom replacer function
const customJsonString = JSON.stringify(originalObject, (key, value) => {
    if (key === "age") {
        return value + 5;
    }
    return value;
});
console.log("Custom JSON String:", customJsonString);

