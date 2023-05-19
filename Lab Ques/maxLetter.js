/*
Find maximum number of letters found in a word.
*/

let maxLengthOfWord = function (words) {
    let maxNumOfLetters = 0;
    let word = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i] != " ") {
            word += words[i];
        }

        if (words[i] == " " || i == words.length - 1) {
            if (word.length > maxNumOfLetters) {
                maxNumOfLetters = word.length;
            }
            word = "";
        }
    }
    return maxNumOfLetters;
}

let a = maxLengthOfWord("i love coding");
console.log(a);