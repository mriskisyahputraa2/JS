// Mon - 7am
// Tue - Wenes- Thurs - 4am
// Fri - 9am
// Sat - Sun - 8am

let day = "Sunday";

switch (day){
    case "Monday": // senin
        console.log("7am"); 
    break;

    case "Tuesday": // selasa
    case "Wenesday": // rabu
    case "Thursday" : // kamis
        console.log("4am");
    break;

    case "Friday" : //jumat
        console.log("9am");
    break;

    case "Saturday": // sabtu
    case "Sunday" : // minggu
        console.log("8am"); 
    break;
    default:
        console.log("get up 10 am hehehe:)");
}