// tipe data angka / number
let data = 8;
let user = "riski";
console.log(typeof data + user);// typeof untuk mengetahui jenis tipe datanyanya

console.log("=======================");

let num1 = 6.10000; // floating point // 0 tidak ditampilakan jika ada nomber selain 0, ditengah-tengah baru ditampilakn ex: 2.10043000
console.log( num1);// output => 6.1

console.log("=======================");


let num2 = 0xfff; // hexadesimal
console.log(num2); // output = 4095

console.log("=======================");


let num3 = 1.5e13 // ecponential 1.5 * 10 12 (e => 10  & 12 => pangkat)
console.log(num3); // output => 15000000000000 // 0-nya ada 11

console.log("=======================");


let num4 = 5/0;// infinity(nilai tak terhingga), terjadi jika saat pembagian0
console.log(num4); // output => infinity /(nilai yang tak bisa dibagi)

console.log("=======================");


let num5 = 324239847287547n; // n(batas number)
// let result = num5 + data; // akan error, (Cannot mix BigInt and other types, use explicit conversions)
console.log(num5 + 2n); // jika batas number + 2 akan error, tapi jika batas number + 2n akan menambahkan batas number lagi

console.log("=======================");


console.log(Number.MAX_VALUE * 10) // Number(pemanggil).MAX_VALUE is (nilai maksimal). jika * 10 => infinity (nilai tak terhinga)


let user1 = 'riski \n'; // (\n), bisa dikatakan mirip <br>  
let user2 = 'ahmad';
console.log(user1 + user2);

console.log("=======================");


// Type Number
let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)

console.log("=======================");

// Math Object
//In JavaScript the Math Object provides a lots of methods to work with numbers.
const VI = Math.PI
console.log(VI)

console.log(Math.round(VI))
console.log(Math.round(9.81))

// Enda Math Object