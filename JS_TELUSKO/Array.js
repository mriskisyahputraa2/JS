// Creating Array and Fetching Elements
let motivation = ['riski!', 'you can do it,', '1 year must focus, for a better future'];


console.log(motivation);
// END Creating Array and Fetching Elements

console.log("================================");

// Diffrent type of data in array
let data1 = ['riski', 2, {tech:'JS'},true, function(){console.log('Function is object bro wkwkwk')}];

console.log(data1)
console.log(data1[1]);
data1[4](); // this get function in variabel data1. cuma bisa manggil function (kalo penulisannya gitu)

let data2 = ['riski', 'eji', 'altaf'];
data2[3] = 'azis';
console.log(data2);


// END Diffrent type of data in array

console.log("================================");


// kalo buat gini hasil apapun akan false
let nums = [1, 2, 3];
let number = [1, 2, 3];
console.log(number == nums) // false


let userOne = {
    'name' : 'riski',
    'status' : 'jomblo'
} 
let userTwo = {
    'name' : 'riski',
    'status' : 'jomblo'
} 
console.log(userOne == userTwo) // false

console.log("================================");

// tapi jika gini, maka akan true
let nums1 = [1, 2, 3]
let numbers = nums1
console.log(numbers == nums1) 

console.log("================================");

let test = "asal"
let object = {
    name: 'Muhammad Rizki Syahputra',
    kelas: 'XII-RPL',
    asal: {
        asalSekolah: 'hagu teugoh',
        asalTinggal: 'kp.jawa-lama'
    },
    hobby: 'ngoding, belajar',
        goals:{
        goals1: 'bulan januari udah bisa make VueJs',
        gols2: 'bulan februari udah paham larave',
        golas3: 'bulan maret ukk selesai, ujian agama selesai, uas juga selesai'
    }
}
console.log(object[test]); // bracket hanya bisa digunakan pada variabel diluar object yang valuenya sama dengan key didilam object tsb