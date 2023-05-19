//async operation using call back

/* function add(num, callBack) {
    callBack(null, num + 10);
}

add(10, (err, result) => {
    console.log(err, result);
}) */


//async operation using promise
/* 
function add(num) {
    return new Promise((resolve, rejected) => {
        if (num < 50) {
            resolve(num + 10);
        } else {
            rejected("Sorry Operation failed.");
        }
    });
}

add(50)
    .then(res => console.log("result:", res))
    .catch(err => console.error("error:", err)); */



//async operation using async and await

async function add(num) {
    if (num < 0) {
        throw new Error("Number can't be negative.");
    }
    return num + 10;
}

async function result() {
    try {
        let res = await add(-20);
        console.log(res);
    } catch (error) {
        console.error("Error is:", error.message);
    }
}

result();