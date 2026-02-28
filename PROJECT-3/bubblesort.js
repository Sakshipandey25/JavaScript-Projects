let arr = [5, 2, 9, 1, 5];

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let copy = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = copy;

            console.log(arr);
        }   
    }
}