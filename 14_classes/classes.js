// ES5

/*function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function () {
    return 'vroom';
}

function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
    return 'beep';
}

const car = new Car ({ title: 'Focus'});
const toyota = new Toyota({color: 'red', title: 'Daily Driver'});*/



// console.log(car);
// console.log(car.drive());

// console.log(toyota);
// console.log(toyota.drive());
// console.log(toyota.honk());


//  ----- ES6 ------

class Car {

    constructor(options) {
        this.title = options.title;
    }

    drive() {
        return 'vroom';
    }

}

// const car = new Car({ title: 'Toyota' });
// console.log(car);
// console.log(car.drive());


class Toyota extends Car {
    constructor(options) {
        super(options);
        this.color = options.color;
    }
    
    honk() {
        return 'beep'
    }
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver'});

console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());
