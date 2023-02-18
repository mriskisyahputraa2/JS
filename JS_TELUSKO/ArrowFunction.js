// arrow function
let greet = (user) => { // (=>) yaitu arrow function, dan ini adalah singkatan dlm membuat function
    console.log('halo ' + user);
    return 1;
}
console.log(greet('riski')); // nilai riski, masuk ke parameter user
// end arrow function

console.log("=================");

// ini berlaku jika hanya punya 1 statment saja, kalo dua statment tidak bisa.
let add = (num1,num2,num3) => num1 + num2 + num3

let result = add(5,-6,-3);
console.log(result);