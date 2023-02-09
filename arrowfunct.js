function sum(a,b){
    return a+b;
}

let sumArrow = (a,b) =>{
    return a+b;
}

console.log(sum(5,2));


function printHi(name){
    return "Hi " + name;
}
let printHiArrow = name =>{
    return "Hi " + name;
}

console.log(printHiArrow("Noyon"))

function hi(){
    console.log("Bangladesh");
}

let hiArrow = ()=>{
    console.log("Bangladesh");
}
hi();