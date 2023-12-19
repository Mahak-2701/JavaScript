function createPerson(name, age, id) {
    return {
        name: name,
        age: age,
        id: id,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
}