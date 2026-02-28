let str1 = "silent"
let str2 = "listen"

if(str1.length != str2.length) {
    console.log("its not  an anagram")
}

let sortedstr1 = str1.split('').sort().join()
let sortedstr2 = str2.split('').sort().join()

if (sortedstr1 == sortedstr2) {
    console.log("This string is an anagram...")
} else {
    console.log("This string is not an anagram...")

}




