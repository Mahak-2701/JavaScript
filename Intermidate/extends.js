class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log(`${this.name} meows.`);
    }
  }

  class Koyal extends Animal, Cat{
    fly(){
      console.log( `{this.name} flys.`);
    }
  }
// Execution
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
const bird = new Koyal("Koyal");


dog.speak();
cat.speak();
bird.fly();