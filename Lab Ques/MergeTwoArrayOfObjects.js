/*
Merge these two arrays

array1=[
    {name:"a" , value:123},
    {name:"b" , value:666}
]

array2=[
    {name:"c" , value:444},
    {name:"d" , value:666},
    {name:"b" , value:111}
]

output:-

array3=[
    {name:"a" , value:123},
    {name:"b" , value:111},
    {name:"c" , value:444},
    {name:"d" , value:666}
]
*/

function mergeTwoArr(arr1, arr2) {
    let map = new Map();

    for (let i = 0; i < arr1.length; i++) {
        let name1 = arr1[i].name;

        if (map.has(name1)) {
            if (arr1[i].value < map.get(name1)) {
                map.set(name1, arr1[i].value);
            }
        } else {
            map.set(name1, arr1[i].value);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let name2 = arr2[i].name;

        if (map.has(name2)) {
            if (arr2[i].value < map.get(name2)) {
                map.set(name2, arr2[i].value);
            }
        } else {
            map.set(name2, arr2[i].value);
        }
    }

    let ans = [];
    for (let key of map) {
        ans.push({ name: key[0], value: key[1] });
    }

    return ans;
}


// let array1 = [
//     { name: "a", value: 123 },
//     { name: "b", value: 666 }
// ];
let array1 = [
    { name: "a", value: 123 },
    { name: "b", value: 666 },
    { name: "b", value: 100 }
];

let array2 = [
    { name: "c", value: 444 },
    { name: "d", value: 666 },
    { name: "b", value: 111 }
];

let a = mergeTwoArr(array1, array2);
console.log(a);