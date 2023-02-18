function greet(){
    for(let i = 5; i <= 5; i++){
        let x = 4;
        let b = 1;
        if(x >= b && 1 == b){
            console.log('capek bet bro')
        }else{
            console.log('udah cukup ngodingnya besok lanjutinnya');
        }
    }
}

greet();

console.log("================================");

// Return Function
function Return(){
    return 'apa kabar bro?';
}
let str = Return();
console.log(str);
// End Return Function

console.log("================================");


// Passing Function
function Passing(nama, wlcm){
    return `halo, ${nama}, ${wlcm}`; 
}
let nama = "riski";
let wlcm = "selamat datang bro";
let pass = Passing(nama, wlcm);
console.log(pass);


function passind(name, wlcm){
    return `halo ${name}, ${wlcm}`;
}
console.log(passind('kii', 'selamat datang'));


function Add(nama = 'rehan', umur = 17){
    return `halo ${nama}, umur gua ${umur}`
}
let add = Add();
console.log(add)
// End Passing Function


console.log("================================");


// Function Expression
let anony = function(num1, num2) // function-nya is anonymous, because dont have name, and in function is function assigned dari variabel anony
{
    return num1 + num2;
}
let result = anony(5,6);
console.log(result);

// End Function Expression

console.log("================================");



// Constructor Function
function User(name, tech){
    this.name = name; // name ini akan diisi oleh user
    this.tech = tech;

    // return this;
}

let alien01 = new User('Muhammad Rizki', 'Laravel'); // ini yang diisi oleh user 
let alien02 = new User('syahputra', 'ReactJS'); // dan ini juga


console.log(alien01);
console.log(alien02);

function Alien(name, tech){ // this constractor function / rokemendasi-nya nama functions-nya diawal huruf besar
    this.name = name; // why this.name=name?, karna name disini untuk dimasukkan/diinputkan oleh user
    this.tech = tech;
    
    // this constractor function also
    this.work = function(){
        console.log('Solving bugs from 12 hrs');
    }

    return 7;
}

let alien1 = new Alien('riski', 'Laravel'); // setiap make new, akan membuat object baru 
let alien2 = new Alien('syahputra', 'JS');

alien2.name = 'Muhammad';
alien1.tech = 'Blokchain'; // ini adalah mengubah laravel, menjadi Blokchain

console.log(alien1);
console.log(alien2 + '\n');
alien1.work();



// Note: Function is object look file Array.js if you dont belive=percaya??