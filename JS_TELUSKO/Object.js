// this is object, object has key and value
let input = "name"

let dataUser = {
    name: 'Rizki',
    age: 17,
    status: 'students',
    'work exp': "this make bracket",
    hobby: "coding, gym, and wacthing youtube",
};

console.log(dataUser);
console.log(dataUser["work exp"]); /// kelebihan make [""]. ada satu lagi yang menarik
console.log(dataUser[input])// dengan menggunakan bracket, bisa panggil variabel diluar dengan value-nya yang sama dengan value dalam salah satu key. contoh-nya input = name;
console.log("==============================");

// Complex Object

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

console.log(data.laptop.ssd.jenis.harga);
console.log(data.laptop.ssd.jenis.harga.length); // length, menghitung jumlah panjang karakter String.
// end Complex Object


// Delete Property
let dataDel = {
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
delete dataDel.laptop.brand // detele function for delete property 

console.log(dataDel);
// end Delete Property