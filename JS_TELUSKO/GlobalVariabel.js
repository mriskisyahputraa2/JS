// Global Variabel
let user = "riski"; // Global Variabel
// 
function greet(u){
    let num = 5; // Local Variabel
    console.log(num);
    return `halo ${u}`;
}
// 
let str = greet(user);
console.log(str);
// End Global Variabel

console.log("==================");


// parameter default value 
function add(num1, num2, num3=1 /* the num3 is default value, if dont value passing*/){ // this parameter

    console.log(num1 + num2 + num3);
    return num1 + num2 + num3;
}
 
let result = add(5,6); // this argumen
console.log(result);
// End parameter default value 
