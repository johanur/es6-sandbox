// ES5

// const add = function (a, b){
//     return a + b;
// }

// console.log(add(1,2));

// ES6

// const add = (a, b) => {
//     return a + b;
// }


const add = (a, b) => a + b;


console.log(add(1,2));

const numbers = [1,2,3];

let num = numbers.map((number) => 2 * number);

console.log(num);


// const team = {
//     members: ['Jane', 'Bill'],
//     teamName: 'Super Squad',
//     teamSummary: function() {
//         return this.members.map(function(member) {
//             return `${member} is on team ${this.teamName}`;
//         });
//     }
// };

const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`;
        });
    }
};

console.log(team.teamSummary());