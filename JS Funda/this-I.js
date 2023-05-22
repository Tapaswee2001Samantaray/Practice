//this operator can access its ojects variable value

let obj1 = {
    firstName: "Tapaswee",
    lastName: "Samantaray",
    name: function () {
        // console.log(this);
        return "Full name is: "+this.firstName+" "+this.lastName;
    }
}

console.log(obj1.name());

// console.log(this);