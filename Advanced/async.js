var arr = new Array();

async function fetchData(arr) {
    return new Promise((resolve, reject) => {
        arr.length > 0 ? resolve(arr) : reject(new Error("Array is empty lol "));
    })
}