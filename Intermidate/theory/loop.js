/*while – The condition is checked before each iteration.
do..while – The condition is checked after each iteration.
for (;;) – The condition is checked before each iteration, additional settings available.
To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.

break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one*/


// for(var i=0;i<11;i++){
//     if(i%2!=0)continue
//     console.log(i);
// } 
// let m=0;
// while(m<3){
//     console.log(`Number${m}!`);
//     m++;
// }


var num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
alert(num);