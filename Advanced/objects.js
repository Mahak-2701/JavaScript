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