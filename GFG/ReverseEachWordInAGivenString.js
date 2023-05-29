/*
Given a String. Reverse each word in it where the words are separated by dots.

Example 1:

Input:
S = "i.like.this.program.very.much"
Output: 
i.ekil.siht.margorp.yrev.hcum
Explanation: 
The words are reversed as
follows:"i" -> "i","like"->"ekil",
"this"->"siht","program" -> "margorp",
"very" -> "yrev","much" -> "hcum".
Example 2:

Input: 
S = "pqr.mno"
Output: 
rqp.onm
Explanation: 
The words are reversed as
follows:"pqr" -> "rqp" ,
"mno" -> "onm"

Your Task:
You don't need to read input or print anything. Your task is to complete the functionreverseWords()which takes the string S as input and
returns the resultant string by reversing all the words separated by dots.


Expected Time Complexity:O(|S|).
Expected Auxiliary Space:O(|S|).


Constraints:
1<=|S|<=105
*/
function reverseWord(w) {
    let ans = "";

    for (let i = w.length - 1; i >= 0; i--) {
        ans += w[i];
    }

    return ans;
}


function reverseWords(s) {
    let word = "";
    let result = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] == ".") {
            word = reverseWord(word);
            result += word;
            result += ".";
            word = "";
        } else {
            word += s[i];
        }
    }

    if (word != "") {
        word = reverseWord(word);
        result += word;
        word = "";
    }

    return result;
}

let a = reverseWords("i.like.this.program.very.much");
console.log(a);