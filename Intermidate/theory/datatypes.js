// There are 8 basic data types in JavaScript.

// Seven primitive data types:
// number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
let n=123;
let n1=12.34;

// bigint for integer numbers of arbitrary length.
let bigint=1234548468368365;

// string for strings. A string may have zero or more characters, there’s no separate single-character type.
let nam="jhon";
let name1='ham';
let name2=`hello${nam}`;//backtrick for a string

// boolean for true/false.
let isgreatet=4>1;
alert(isgreater);//true

//Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
alert(1/0);//infinity

// NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
alert( "not a number" / 2 ); // NaN, such division is erroneous

// null for unknown values – a standalone type that has a single value null.
// let age=null;
// // undefined for unassigned values – a standalone type that has a single value undefined.
// let age;
// alert(age)//undefined
let nane="jhin";
nane=undefined;
alert(nane)//shows undefined
// symbol for unique identifiers.
// And one non-primitive data type:
// object for more complex data structures\
//1.creating objects with object constructor
let student=new Object({Name:"amit",
age:23})
console.log(student.age);
student.age = 55;
console.log(student.age);

// //2.creating object using object litrals
let user={
    nam:"jhon",
    age:23
}

//3. creating object by  function
 function Teacher(nam,age,course){
    this.nam=nam,
    this.age=age,
    this.course=course;
 }
 //create reference or objct
 var teacher=new Teacher("ved",25,"COA");

  console.log(teacher);

for (let key in teacher){
    console.log(`${key}: ${teacher[key]}`);
}


console.log("hello");