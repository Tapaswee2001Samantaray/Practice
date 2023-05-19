/*
Maximum sum of three consicutive elements of an array.
*/

function max3Sum(arr) {
    let currSum = arr[0] + arr[1] + arr[2];
    let maxSum = currSum;

    for (let i = 3; i < arr.length; i++) {
        currSum += arr[i];
        currSum -= arr[i - 3];

        if (currSum > maxSum) {
            maxSum = currSum;
        }
    }
    return maxSum;
}

let a = max3Sum([2, 3, 4, 5, 6, 7, 2, 1]);
console.log(a);