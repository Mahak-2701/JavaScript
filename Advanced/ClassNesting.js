class OuterClass {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, from the outer class: ${this.name}`);
    }
  
    class InnerClass {
        constructor(age) {
        this.age = age;
    }

    introduce() {
        console.log(`I'm also from the outer class, and I'm ${this.age} years old.`);
    }
}
}

// Create an instance of the outer class
const outerObj = new OuterClass("Bard");
outerObj.greet(); // Output: Hello, from the outer class: Bard

// Create an instance of the inner class from within the outer class
const innerObj = new outerObj.InnerClass(5);
innerObj.introduce(); // Output: I'm also from the outer class, and I'm 5 years old.
