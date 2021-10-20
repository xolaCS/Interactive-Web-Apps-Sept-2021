import {Person} from "./oop.js"; 


function PersonProt(firstName, lastName){
    this._firstName = firstName;
    this._lastName = lastName;

    return this; 
}

console.log(Person); 
console.log(PersonProt); 

const a = new PersonProt("Anna", "Maria");
const b = new Person("John", "Smith");

console.log(a); 
console.log(b); 

// Factory Function

const Shirt = (brand, type, color, price ) => {
    return {
        brand: brand, 
        type: type, 
        color: color, 
        price: price, 
        details() {
            console.log(`Brand: ${this.brand}, Type: ${this.type}, Price: ${this.price}, Color: ${this.color}`); 
        }
    }
};

const product1 = Shirt("Polo", "Golf-Type", "Red", 250); 
// const product2 = Shirt("Polo", "Golf-Type", "Red", 250); 
// const product3 = Shirt("Polo", "Golf-Type", "Red", 250); 

console.log(product1); 
console.log(product1.brand); 
console.log(product1.details()); 

function myFunction(name){
    this._name = name;
}; 

let user = new myFunction("Susan"); 
myFunction.prototype.surname = "Boiles"; 

console.log(user.surname); 




