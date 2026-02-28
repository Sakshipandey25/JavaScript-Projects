let str = 'Hello World';
let vowels = 0, consonent = 0;

for (let i = 0; i < str.length; i++) {

    let ch = str[i].toLowerCase();

    if (ch >= 'a' && ch <= 'z') {
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            vowels++;
        }
        else {
            consonent++;
        }
    }
}

console.log(`Vowels : ${vowels} & Consonents : ${consonent}`);