// while, terdiri dari initialize, condition, increment 

let i = 1; // initialize
while(i <= 5){ // condition
    console.log("increment", i);
i++; // increment, make increment if condition value dont zero(0), and dont to make decrement cause you can in infinate Looping
}; // and ...

console.log("===================================");

let a = 6; // initialize
while(a >= 0){ // condition
    console.log("decrement", a);
a--; // decrement , make decrement when operation >, but the output sampai looping one(1),
// if you make operator >= the output will looping sampai zero(0). 
}

console.log("===================================");


// do while 

let b = 5;

do
{
    console.log("do while", b);
    b++;
}while(b <= 10) // if mendapat value False maka, program will play sekali saja.


console.log("===================================");


let c = "riski";
while(c === "riski"){
    console.log("mantap bro");
c++;
}

console.log("=========================");

let d = 3;
do{
    console.log("semangat bro");
    d++;
}while(d > 10);


console.log("=========================");