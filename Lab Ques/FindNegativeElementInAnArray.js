/*
Given an unsorted Array , find out the total number of negative element present in that array.
*/

function findNegativeElement(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            result++;
        }
    }
    return result;
}

let a = findNegativeElement([1, 2, 8, -4, 2, -8, -4, 0, -1]);
console.log(a);