// ES5

/*function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function () {
            return this.inventory.reduce((total, book) =>{
                return total + book.price
            },0);
        },
        priceForTitle: function(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    }
}*/


// ES6 

function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) =>{
                return total + book.price
            },0);
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    }
}


const inventory = [
    { title: 'Harry Potter', price: 10},
    { title: 'Eloquent JavaScript', price: 15}
];


const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));


// Another Example

// ES5 
function saveFile(url, data) {
    $.ajax({ method: 'POST', url: url, data: data });
}

// ES6
function saveFile(url, data) {
    $.ajax({ method: 'POST', url, data });
}

const url = "http://fileupload.com";
const data = { color: 'red' };

const result = saveFile(url, data);

console.log(result);