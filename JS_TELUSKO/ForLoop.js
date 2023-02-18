// For looping
let j = 10;
let a = 1;
let b = 1;

for(let i = 1; i <= 5; i++){  // kalo make < maka output-nya 4. tapi kalo make <= output-nya 5
    console.log('Hi', i);
    console.log("=========================");

    if(j > 1){
        console.log("you great");
    }else if (a === b){
        console.log("same");
    }else{
        console.log("you can coba ulang");
    }
}

// for(let x = 1; x < 100; x++){
//     if(x % 3 === 0){
//         console.log(x);
//     }
// }

console.log("=========================");

let i = 123456;
let n = 654321;

while(i > 0 && n > 0){
    console.log(i, n % 10);
    i = parseInt(i / 10);
    n = parseInt(n / 10);

    
}

console.log("=========================");


// Object with For Looping
let data = {
    name : 'mriski',
    hobby : 'coding, gym, and wacthing youtube',
    laptop : { // this name key
        cpu : 'AMD A9', // cpu is property, and AMD A9 is value
        ssd :{
            jenis: {
                brand: 'vegan', 
                harga: 'Rp.350.000.00'
            },
            kapasitas: '256gb'
        },
        brand : 'Lenovo'
    }
};

for(let key in data){ // key didalam data 
    console.log(key,":", data[key]); // output=> key(name,hobby,laptop), nama object data[key], panggil key-nya
}

