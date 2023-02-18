// Function Object
let a = {
    cpu: 'amd a9',
    ram: 8,
    brand: 'Lenovo',

    greet: function(){
        let a = 'bro?'
        console.log('welcome' + " " + a);
    }
}

a.greet();
// end Function Object

console.log('===================');

// Methods THIS in Javascript 
let laptop2 = {
    cpu: 'amd a9',
    ram: 8,
    brand: 'Asus',

    getConfig: function(){
        console.log(laptop2.cpu);
    }
}

let laptop1 = {
    cpu: 'i12',
    ram: 8,
    brand: 'Lenovo',

    getConfig: function(){
        console.log(this.cpu);
    }
}
laptop1.getConfig();
// end 

console.log("=================");



// Why it is called THIS in keyword?
// function compare
let laptop3 = {
    cpu: 'i7',
    ram: 16,
    brand: 'Apple',

    getConfig: function(){
        console.log(this.cpu);
    }
}

let laptop4 = {
    cpu: 'i9',
    ram: 16,
    brand: 'HP',
    compare: function(other){
        if(this.cpu > other.cpu)
            console.log(this);
        else
            console.log(other)
    },


    getConfig: function(){
        console.log(this.cpu);
    }
}


laptop4.compare(laptop3);

// end 

console.log("=================");


// Tambahan THIS

const video = {
    title: "a",
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this.title,tag);
        },this);
    }
};
video.showTags();
