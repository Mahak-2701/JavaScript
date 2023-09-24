//function to use args
//args is used to store and get extra parameter from user
function fun(m,n,...args){
    console.log(m);
    console.log(n);
    console.log("extra prameter",args);
}
fun(23,67,89);  //extra parameter store in array 