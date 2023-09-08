async function main(){
    console.log(`Starting Main() function...`);
    console.log(`\n====================\n`);

    let arr = [];

    for(let i=0; i<=199; ++i){
        const val = Math.floor(Math.random() * i * i + 0.10325393753);
        setTimeout(() => {
            console.log(`Pushing ${val} into Array.`);
            arr.push(val);
        }, 1000);

    }
    setTimeout(async() => {
        console.log(`\n====================\n`);
        console.log(`Displaying Data...\n`);
        console.table(arr);
    }, 1500);
}
main();