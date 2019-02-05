// --- ES5

/* var expense = {
    type: 'Business',
    amount: '$45 USD'
};

var type = expense.type;
var amount = expense.amount; */


// --- Refactoring above code with ES6

/* const { type } = expense;
const { amount } = expense;

const { type, amount } = expense;

console.log(type,amount); */


// --- Another Example ---

// --- ES5

/* var savedFiled = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

function fileSummary(file) {
    return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

console.log(fileSummary(savedFiled)); */


// --- ES6 - Destructuring

/* var savedFiled = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

function fileSummary({ name, extension, size }, { color }) {
    return `${color} The file ${name}.${extension} is of size ${size}`;
}

console.log(fileSummary(savedFiled, {color: 'Red'})); */


// --- Another Example : Destructuring Arrays ---

/* const companies = [
    'Google',
    'Facebook',
    'Uber'
];

const [name] = companies;
const [...rest] = companies;
console.log(name);
console.log(rest); */


// --- Another Example : Destructuring Arrays and Objects at the same time ---

/* const companies = [
    { name: 'Google', place: 'Mountain View' },
    { name: 'Facebook', place: 'Menlo Park' },
    { name: 'Uber', place: 'San Francisco' }
];

const [ { place } ] = companies;
console.log(place);


const Google = {
    locations: ['Mountain View', 'New York', 'London']
};

const { locations: [ place ] } = Google;
console.log(place); */



// --- Another Example --- 

 
/* function signup( { password, username, city, email, dateOfBirth }) {
    // create new user

}

const user = {
    username: 'myname',
    password: 'mypassword',
    email: 'myemail@example.com',
    dateOfBirth: '1/1/1990',
    city: 'New York'
}

signup(user); */



// --- Another Example ---



const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

let log = points.map(([ x, y ]) => {
    return { x, y };
});

console.log(log);






























