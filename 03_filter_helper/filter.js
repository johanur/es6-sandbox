var products = [{
        name: 'cucumber',
        type: 'vegetable',
        quantity: 0,
        price: 1
    },
    {
        name: 'banana',
        type: 'fruit',
        quantity: 10,
        price: 15
    },
    {
        name: 'celery',
        type: 'vegetable',
        quantity: 30,
        price: 13
    },
    {
        name: 'orange',
        type: 'fruit',
        quantity: 3,
        price: 5
    },
];

/* 

var filteredProducts = [];

products.forEach(function (product) {
    if (product.type === 'fruit') {
        filteredProducts.push(product);
    }
});

console.log(filteredProducts); 

*/



/* 

var filteredProducts = products.filter(function(product){
    return product.type === 'vegetable';
});

console.log(filteredProducts); 

*/


/* 

var filteredProducts = products.filter(function(product) {
    return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
})

console.log(filteredProducts);

*/


var post = { id: 4, title: 'New Post'};
var comments = [
    { postId: 4, content: 'awesome post'},
    { postId: 3, content: 'it was ok'},
    { postId: 4, content: 'neat'},
];

function commentsForPost(post, comments){
    return comments.filter(function(comment){
        return comment.postId == post.id;
    })
}

// var filteredComments = comments.filter(function(comment){
//     return comment.postId == 4;
// })

// console.log(filteredComments);

var result = commentsForPost(post, comments);

console.log(result);
