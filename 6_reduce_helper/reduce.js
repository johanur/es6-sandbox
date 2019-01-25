var numbers = [ 10, 20, 30 ];
var sum = 0;

 for(var i = 0; i < numbers.length; i++)
 {
     sum += numbers[i];
 }

console.log(sum);

// Example - 1
var reduce = numbers.reduce(function(sum, number){
    return sum + number;
}, 0);

console.log(reduce);

// Example - 2
var primaryColors = [ 
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

var reduceColor = primaryColors.reduce(function(previous , primaryColor){
    previous.push(primaryColor.color);
    return previous;
}, []);

console.log(reduceColor);


// Example - 3

function balancedParams(string) {
    return !string.split("").reduce(function(previous, char){
        if( previous < 0 ){
            return previous;
        }
        if( char === "(") {
            return ++previous;
        }
        if( char === ")") {
            return --previous;
        }

        return previous;
    }, 0);
}

var total = balancedParams(")(");

console.log(total);
