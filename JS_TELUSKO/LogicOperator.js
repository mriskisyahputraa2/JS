// Operator Logika
// AND : && =  2 2 harus true jika mau output True, jika salah satu false maka, akan False

// OR : || = tidak harus 2 2 untuk dapat True. salah satu harus ada True jika mau output True, kalo 2 2 False output akan False dan juga kalo 2 2 True output akan False

// NOT ! = 

let a = 4, b = 3, c = 8;
let hasil = a > b && c <= a || a == b || c > b;
console.log('Logic &&,||: ' + hasil);


console.log("================")


let x = 7, y = 2, z = 5; 
let result = x < y || x > z; // pengecekan-nya true. (kalo false, maka output akan true)
let n = !result // ex: apakah result ada yang true tidak? jwb: ada, maka the output is Flase
console.log(n); // the output is false 