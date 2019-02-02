// ES5 Way

function getMessage() {
    const year = new Date().getFullYear();

    return "The year is " + year;
}

console.log(getMessage());


// ES6 
// Refactoring Above Code using Template Strings

function getNewMessage(){
    const year = new Date().getFullYear();

    return `The year is ${year}`;
}

console.log(getNewMessage());

// Another Example

// PHP

// $data = '{"device_id":"'.$device_id.'", "guid":"'.$guid.'","username":"'.$username.'",'"}';


const device_id = 4;
const guid = 20;
const username = "Hello";

// ES5
// const data = '{"device_id":"' + device_id + '", "guid":"' + guid + '","username":"' + username + '","}';

// ES6

const data = `{"device_id":" ${device_id} ", "guid": " ${guid} ","username": " ${username} ","}`;

console.log(data);


// Another Example

const year = 2018;
const yearMessage = year;
console.log(yearMessage);