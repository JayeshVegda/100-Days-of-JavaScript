//Day 5

const prompt=require("prompt-sync")({sigint:true}); 

let age = prompt("Enter your age : ");
age = Number.parseInt(age);

if(age == 0 ){
    console.log("You just born now ! ");
}
else if(age<9){
    console.log("You are Just a baby !");
}
else if(age>9 && age<=18){
    console.log("You are a smart Student ");
}
else if(age>18 && age<=60){
    console.log("You Gonna Conqure the World");
}
else{
    console.log("Pls die now");
}
