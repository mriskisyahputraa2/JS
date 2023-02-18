// num++ // post increment
// ++num // pre increment // buat menambah satu angka 

// num-- // post decrement
// --num // pre decrement // buat mengurangi satu angka 
let num = 10;
let y = num++
let x = num--

console.log(x, y);

console.log("=============================");

// nilai yang berpangkat
let number = 4;
let result1 = number * number * number; // dari pada buat gini sangat panjang ada 2 cara :
let result2 = Math.pow(4, 2); // Math.pow(Math.power). 4 is value number, 2 is cube(pangkat) berapa yang mau dikali 
let result3 = 4 ** 5; // bisa juga dengan gini
console.log(result1);
console.log(result2);
console.log(result3);

console.log("=============================");


let nu = 4;
nu *= 6;
console.log(nu);

console.log("=============================");


// Relational Operator
console.log(6 <= 6);
console.log(6 >= 6); // kalo make >= / <= yang value nya sama. maka, the output akan true tapi,
console.log(6 > 6); // jika make > / < maka the output akan false

let text1 = "abc";
let text2 = "abc"; // note: jika abjad awal sama a & a. maka akan dihitung panjang karakter

let data = text1 < text2;
console.log(data); // output=>false, why? karena boolean disini sesuai abjad d & g. g lebih besar sedangkan d lebih kecil. ex:text1(d) > text(g) == false 

// end Relational Operator
console.log("=============================");


// Operator Assignment
// ==    : ex: hanya mengecek persamaan value-nya, kalo sama akan true, meskipun tipe datanya beda, note: tidak mengecek tipe datanya 

// ===  : ex: jika value pertama number dan kedua string number mak the output=> false. note: === mengecek type data dan datanya.

// ==
let a = 1;
let b = "1";

let data2 = a == b;
console.log(data2);

// ===
let c = "2";
let d = 2; 
console.log(c === d);
