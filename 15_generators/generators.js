/* Generators Start: */



/*function *numbers() {

    yield;

}

const gen = numbers();
console.log(gen);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());*/



/* --------------------- */

/*
function *shopping() {
    // Stuff on the sidewalk 

    // Walking down the sidewalk
    // Go into the store with cash
    const stuffFromStore = yield 'cash';

    // Walking to laundry place
    const cleanClothes = yield 'laundry';

    // Walking back home
    return [stuffFromStore, cleanClothes];

}

// Stuff in the store
const gen = shopping();

// Leaving our house
console.log(gen.next());

// Walked into the store
// Walking up and down the aisles
// Purchase our stuff
// Leaving the store with groceries
console.log(gen.next('groceries'));
console.log(gen.next('clean clothes')); 
*/



/* --------------------- */
/*
function *colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

// const gen = colors();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

const myColors = [];
for (let color of colors()) {
    myColors.push(color);
}
console.log(myColors);
*/



/* --------------------- */

/*
const engineeringTeam = {
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
};

function *TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}

console.log(names);
*/


/* --------------------- */

// Generator Delegation 

/*
const testingTeam = {
    lead : 'Amanda',
    tester: 'Bill'
};

const engineeringTeam = {
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    testingTeam: testingTeam
};



function *TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    // yield team.testingTeam.lead;
    // yield team.testingTeam.tester;

    const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
    yield *testingTeamGenerator;
}

function *TestingTeamIterator(team){
    yield team.lead;
    yield team.tester;
}


const names = [];
for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}

console.log(names);
*/


/* --------------------- */

// Symbol Iterator 
// Refactoring above code

/*
const testingTeam = {
    lead : 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
};

const engineeringTeam = {
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    testingTeam: testingTeam,
    [Symbol.iterator]: function* () {
        yield this.lead,
        yield this.manager,
        yield this.engineer,
        yield* this.testingTeam
    }
};




const names = [];
for (let name of engineeringTeam) {
    names.push(name);
}

console.log(names);
*/






/* --------------------- */

// Generators with Recursion
class Comment {
    constructor(content, children) { 
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator]() {
        yield this.content;
        for(let child of this.children) {
            yield* child;
        }
    }
}

const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('meh', []),
];

const tree = new Comment('Great Post!', children);
// console.log(tree);

const values = [];
for (let value of tree) {
    values.push(value);
}

console.log(values);
