var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

// for (var i = 0; i < computers.length; i++)
// {
//     var computer = computers[i];

//     if(computer.ram < 16 ) {
//         allComputersCanRunProgram = false;
//     }
//     else{
//         onlySomeComputersCanRunProgram = true;
//     }
// }

var everyCom;
var someCom;

computers.every(function(computer){
    everyCom = computer.ram > 16;
    return everyCom;
});

computers.some(function(computer){
    someCom = computer.ram > 16;
    return someCom;
});


// console.log('Every Helper - ', everyCom);
// console.log('Some Helper - ', someCom);


var everyName;
var someName;

var names = [
    "Alexandria",
    "Matthew",
    "Joe"
];

names.every(function(name){
    everyName = name.length > 4;
    return everyName;
});

names.some(function(name){
    someName = name.length > 4;
    return someName;
})


// console.log('Every Helper - ', everyName);
// console.log('Some Helper - ', someName);


function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

var username = new Field("Johan");
var password = new Field("123456");
var birthdate = new Field("10/10/2010");

// var a = username.validate() && password.validate();

var fields = [username, password, birthdate];

var everyField;
var someField;

fields.every(function(field){
    everyField = field.validate();
    return everyField;
});

fields.some(function(field){
    someField = field.validate();
    return someField;
});

console.log('Every Helper - ', everyField);
console.log('Some Helper - ', someField);





