let arr = [10, 5, 8, 20, 15];

arr.sort(function (a, b) {
    return a - b;
});

let secondSmall = arr[1];
let secondLarge = arr[arr.length - 2];

console.log(`Second Smallest : ${secondSmall }, Second Largest : ${secondLarge}`);