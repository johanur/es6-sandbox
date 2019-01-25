var users = [
    { name: 'Jill'},
    { name: 'Alex'},
    { name: 'Bill'},
];

/* var user;

for(var i = 0; i < users.length; i++){
    if(users[i].name === 'Alex') {
        user = users[i];
        break;
    }
}

console.log(user); */


/* var user = users.find(function(user){
   return user.name === 'Jill';
});

console.log(user); */


/* var model;

function Car(model){
    this.model = model;
}

var cars = [
    new Car ('Buick'),
    new Car ('Camaro'),
    new Car ('Focus'),
];

var result = cars.find(function(car){
    return car.model === 'Focus';
});

console.log(result); */



var posts = [
    { id: 1, title: 'New Post'},
    { id: 2, title: 'Old Post'},
];

var comments = {postId: 1, content: 'Great Post'};


function postForComment(posts, comments){
    return posts.find(function(post){
        return post.id == comments.postId;
    })
}

var result = postForComment(posts, comments);

console.log(result);


