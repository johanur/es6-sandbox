var numbers = [2,3,4];
var doubleNumbers = [];

// for(var i = 0; i < numbers.length; i++){
//     doubleNumbers.push(numbers[i] * 2);
// }

numbers.forEach(function(number){
    doubleNumbers.push(number * 2);
});

var doubled = numbers.map(function(number){
    return number * 2; 
});

console.log(doubleNumbers.toString());
console.log(doubled.toString());


var cars = [
    { model: 'Buick' , price: 'CHEAP'},
    { model: 'Camaro' , price: 'EXPENSIVE'},
];

var prices = cars.map(function(car){
    return car.price;
})

console.log(prices.toString());