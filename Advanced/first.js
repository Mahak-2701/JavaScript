async function main(){
    let arr = []

    for(let i=0; i<=199; ++i){
        const val = Math.floor(Math.random() * i)
        setTimeout(() => {
            console.log(`Pushing ${val} into Array.`);
            arr.push(val);
        }, 1000);

    }
    setTimeout(async() => {
        console.log(`Displaying Data...`);
        console.table(arr);
    }, 1500);
}
main();