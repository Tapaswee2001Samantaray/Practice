/*
convert an array of number to an array of strings in such a way that is a number is 1,2,3,4 then string would have values like 1:a , 2:ab,
3:abc, 4:abcd e.g [2,5]=>["ab","abcde"];
*/

function numToStr(nums) {
    let string = "";
    let alphaArr = [""];

    for (let i = 97; i < 122; i++) {
        string += String.fromCharCode(i);
        alphaArr.push(string);
    }

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(alphaArr[nums[i]]);
    }
    return result;
}

let a = numToStr([2, 25]);
console.log(a);