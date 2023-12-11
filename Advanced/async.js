var array = new Array([]);

async function fetchData(arr) {
    await this.arr
    return new Promise((resolve, reject) => {
        arr.length > 0 ? resolve(arr) : reject(new Error("Array is empty lol "));
    })
}

async function main() {
    var res = await fetchData(array);
    console.log(res);
}

main()