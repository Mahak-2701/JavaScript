var array = new Array([45,74,11,96,48,30]);

async function fetchData(arr) {
    return new Promise((resolve, reject) => {
        arr.length > 0 ? resolve(arr) : reject(new Error("Array is empty lol "));
    })
}

async function main() {
    var res = await fetchData(array);
    console.log(res);
}

main()