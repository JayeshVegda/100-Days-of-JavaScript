const prompt=require("prompt-sync")({sigint:true}); 

let choice = prompt("Enter You Language : ");

switch(choice){
    case 'Python':
        console.log("Its Easy to Read and Learn")
        break;
    case 'Java':
        console.log("Its Hard AF")
        break;
    case 'C++':
        console.log("Old and hard")
        break;
    default:
        console.log("Idk must be usefull")
}