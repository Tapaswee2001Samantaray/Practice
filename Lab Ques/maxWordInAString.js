/*
Find maximum length of word found in the given string.
*/

let maxLengthWord = function (str) {
    let maxLength = 0;
    let word = "";
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            word += str[i];
        }

        if (str[i] == " " || i == str.length - 1) {
            if (maxLength < word.length) {
                maxLength = word.length;
                ans = word;
            }
            word = "";
        }
    }
    return ans;
}

let a = maxLengthWord("i love Tapaswee coding");
console.log(a);