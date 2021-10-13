
let myString = "Hello"; 
const myNum = 10 ;
var myUndefinedVar; 



function logNumbers(maxNum){
    for (let index = 0; index < ( maxNum + 1 ) ; index++) {

        console.log(index);         
    }
}

class Person {
    _firstName;
    _lastName;  
    _planet = "Earth"; 
    _idNum = "!@&#^*&@^#*&#"; 
    _gender; 
    
    constructor(firstName, lastName){
        // let x = 10; 
        this._firstName = firstName ;
        this._lastName = lastName ;
        // this.age; 
    }

    get firstName(){
        // Add logic to santise 
        return this._firstName; 
    }

    get idNum(){
        return String(this._idNum);
    }

    set gender( opt ) {
        this._gender = opt; 
    }

    get gender(){
         if (this._gender === undefined) {
            console.log("ERROR: Gender not specified")
         } else {
             return this._gender;
         }
    };


};

// logNumbers(15)

const a = new Person("Anna", "Maria");

// Correct : Use getter method to access the private field 
console.log(a.firstName); 

// Incorrect : Do not access private fields directly 

console.log(a._firstName); 

a.gender = "Female";

console.log(a.gender); 

const b = new Person("Bob", "Marley");

console.log(b.gender); 




