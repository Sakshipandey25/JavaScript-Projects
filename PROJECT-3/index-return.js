function findIdx(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

console.log(findIdx([10, 20, 30, 40, 50], 40));