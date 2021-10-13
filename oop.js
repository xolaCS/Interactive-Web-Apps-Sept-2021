
let myString = "Hello"; 
const myNum = 10 ;
var myUndefinedVar; 



function logNumbers(maxNum){
    for (let index = 0; index < ( maxNum + 1 ) ; index++) {

        console.log(index);         
    }
}

class Person {
    firstName;
    lastName;  
    planet = "Earth"; 
    constructor(firstName, lastName){
        let x = 10; 
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.age; 
    }
}

// logNumbers(15)

let a = new Person("Anna", "Maria");

console.log(a.name); 

