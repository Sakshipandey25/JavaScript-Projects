let arr = [1, 2, 3, 4, 5];
let k = 3;

let set1 = arr.slice(k);

let set2 = arr.slice(0, k);

let rotate = set1.concat(set2);

console.log(rotate);

