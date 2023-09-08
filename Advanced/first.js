let arr = []

for(let i=0; i<=199; ++i){
    arr.push(Math.floor(Math.random() * i));
}

console.table(arr);