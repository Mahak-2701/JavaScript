class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
    rest(){

    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
    rest(){
      
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log(`${this.name} meows.`);
    }
    rest(){
      
    }
  }

  class Koyal extends Animal, Cat{
    fly(){
      console.log( `{this.name} flys.`);
    }
    rest(){
      
    }
  }
// Execution
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
const bird = new Koyal("Koyal");


dog.speak();
cat.speak();
bird.fly();