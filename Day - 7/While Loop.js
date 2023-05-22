//Day 7

const prompt=require("prompt-sync")({sigint:true}); 


while (true){
    let i = prompt("Enter Your Number : ")
    i = Number.parseInt(i)
    if (i == 0){
        console.log("You are Shit !")
        break;
    }
    else if (i<18){
        console.log("You are Kid")
        break;
    }
    else if (i>18 && i<90){
        console.log("Welcome Senor")
        break;
    }
    else{
        console.log("Invalid Input")
    }
}