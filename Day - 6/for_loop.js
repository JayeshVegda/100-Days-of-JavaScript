
sum_of_odd = 0
sum_of_even = 0
age = 15

for (let i = 0; i < age; i++) {
    if(i%2 === 0){
        console.log((i+1) + " is odd")
        sum_of_odd += (i+1)
    }
    else{
        console.log((i+1) + " is even")
        sum_of_even += (i+1)
    }
}

console.log("\nSum of Even is " + sum_of_even, "\nSum of odd is " + sum_of_odd)