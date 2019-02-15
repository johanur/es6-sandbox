/* Promises and Fetch Start: */

// promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 3000);
//     // resolve(); 
//     // reject();
// }); 

// Promise has two properties 
// We use 'then' and 'catch' to register callbacks 

// promise
//     .then(() => console.log('Finally Finished'))
//     .then(() => console.log('I also ran'))
//     .catch(() => console.log('uh Oh!!'))


/* Executes when PromiseStatus si Rejected */

// promise.catch(() => {
//     console.log('Not Finished');
// });

url = "https://jsonplaceholder.typicode.com/posts123/";

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error=> console.log('BAD', error))



