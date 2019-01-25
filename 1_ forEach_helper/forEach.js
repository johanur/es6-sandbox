var colors = ['red', 'green', 'blue'];

// for Loop
for(var i = 0; i< colors.length; i++){
    // console.log(colors[i]);
}

// forEach Loop
colors.forEach(function(color){
    console.log(color);
})

// forEach Example: 

// Create an array of numbers

var numbers = [1,2,3,4,5];

// Create a variable to hold the sum

var sum = 0;

// Loop over the array, incrementing the sum variable

/*numbers.forEach(function(number){
    sum += number;
})*/

// Alternative Way

function adder(number){
    sum += number;
}


numbers.forEach(adder);

// print the sum varible
console.log(sum);