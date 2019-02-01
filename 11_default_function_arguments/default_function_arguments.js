
// ES5
// function makeAjaxRequest(url, method) {
//     if(!method) {
//         method = 'GET';
//     }
//     // logic to make the request

// }

// ES6

function makeAjaxRequest(url, method = 'GET') {
    return method;
    // logic to make the request

}

console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', null));
console.log(makeAjaxRequest('google.com', 'POST'));


// Another Example

function User(id) {
    
    this.id = id;
}

function generateId() {
    return Math.random() * 999999;
}

function createAdminUser(user = new User(generateId())) {
    user.admin = true;
    return user;
}

// createAdminUser(new User(generateId()));
console.log(createAdminUser());

