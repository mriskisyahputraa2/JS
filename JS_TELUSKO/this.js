let laptop1 = {
    cpu: 'i9',
    ram: 16,
    brand: 'Apple',

    // this method object with functions
    greet: function(){
        // console.log(laptop1.brand); // bisa gunakan ini or
        console.log(this.brand); // gunakan method this.
    }
}
let laptop2 = {
    cpu: 'i9',
    ram: 16,
    brand: 'HP',

    // this method object with functions
    greetGet: function(){
        // console.log(laptop2.brand); // bisa gunakan ini or
        console.log(this.brand); // gunakan method this.
    }
}
laptop2.greet();