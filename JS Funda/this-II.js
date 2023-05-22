// strict mode of JavaScript "this" operator will be undefine.
'use strict'

const simpleFunction = function (nums) {
    console.log(nums + 10);
    console.log(this);
}

simpleFunction(10);

const simpleArrowFunction = (nums) => {
    console.log(nums + 10);
    console.log(this);
}

simpleFunction(20);
