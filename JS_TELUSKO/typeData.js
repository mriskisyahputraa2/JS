// type Conversion 
let num = String(6); // String, Number, Boolean 
console.log(num, typeof num); // output= 6 string, ini terjadi dikarenakan kita memakai salah satu diatas yaitu string

// end Conversion


// type coercion
let x 
console.log(x, typeof x);

x = 8;
x = x + ""; // the output 8 string
console.log(x, typeof x);

x = 2
x = x + 12; // the output is 14 number 
console.log(x, typeof x);


x = true
x = x + 123; // the output is 123+1(true)
console.log(x, typeof x);

x = "hello"
x = x + 12; // the output is hello12 string, berarti jika nilai x -nya string maka memang string juga outputnya
console.log(x, typeof x);


x = 8;
x = x -2;
console.log(x, typeof x); // the output is 6 number

x = !x
console.log(x, typeof x); // the output is false boolean

console.log(Boolean(7)); // output=>true, setiap yang ber-angka akan true, tapi
console.log(Boolean(0)); // output=>false, nol(zero) pasti akan false
console.log(Boolean("riski")); // output=>true


let y
y = 8;
y = y + ""
console.log(y, typeof y); // output=> String

y = +y + 2;
console.log(y, typeof y); // awal output 82 string, tapi make operator ternary berubah menjadi output=>10number

let user = parseInt('s1 23'); // output=> 123number, parseInt is function spesial jika ada number bertipe string, maka akan diubah menjadi number but,
console.log(user, typeof user);// jika menggunakan parseInt type string dan nilai nya juga string maka, ouput=>NaN number
// end coercion
 