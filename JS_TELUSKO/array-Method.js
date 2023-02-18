// Array Method
// 1. push : menambahkan data di akhir (rekomend)
// 2. pop : meremove data yang terakhir (rekomend)
// 3. shift : meremove data yang pertama (kurang rekomed)
// 4. unshift : menambahkan data di akhir (kurang rekomed)
// 5. splice : meremove data sesuai yang kita inginkan dan bisa menambahkan datanya lagi

let data = [1,2,3,4,5];

console.log(`Method Push: ${data.push(10)}`); // Method Push. outputnya 6, why? data diatas ada 5 di-tambah data-nya dengan 10. maka, hasilnya/ outpunya 6. 

console.log(`Method Pop: ${data.pop()}`); // outputnya 10, why? method pop meremove nilai data yang terakhir

console.log(`Method Shift: ${data.shift()}`); // outputnya 1, why?method shift meremove nilai data yang pertama

console.log(`Method unshift: ${data.unshift(8)}`) // outputnya add-kan data di awal

console.log(`Method splice: ${data.splice(3,1,12,13)}`) // outpunya meremove 3,4,5 why? jika meremove di tengah2 maka method ini akan meremove sampai akhir. trs 1 itu apa? supaya tidak diremove semuanya jadi beri dia batasan ex: 1,2,or 3. dan koma(,) ke-3 adalah 12, maka 12 adalah nilai yang ditambahkan sampai selanjutnya

console.log(data);