/*function addNumbers(numbers){
    return numbers.reduce((sum, number) => {
        return sum + number;
    },0);
}

const result = addNumbers([1,2,3,4,5]);

console.log(result);*/

// Refactoring Above Code using Rest Operator

function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    },0);
}

const result = addNumbers(1,2,3,4,5,6);

console.log(result);



// Another Example

// const defaultColors = [ 'red', 'green'];;
// const userFavoritColors = ['orange','yellow'];
// const fallColors = ['fire red', 'fall orange'];


// console.log(defaultColors.concat(userFavoritColors));

// console.log([...defaultColors, ...userFavoritColors]);

// console.log([...fallColors, ...defaultColors, ...userFavoritColors]);

// console.log([ 'blue', ...fallColors, ...defaultColors, ...userFavoritColors]);


// Another Example


/*function validateShoppingList(...items) {

    if (items.indexOf('milk') < 0 ){
        return ['milk', ...items];
    }
    
    return items;

}

console.log(validateShoppingList('oranges', 'bread'));*/

const MathLibrary = {

    calculateProduct(...rest) {
        console.log('Please use the multiple method instead');
        return this.multiply(...rest);
    },
    multiply(a, b){
        return a * b;
    }

};