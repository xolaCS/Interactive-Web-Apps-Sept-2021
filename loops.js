// let counter = 10;

// while(counter < 10 ){
//     console.log(`The value of counter is ${counter}`); 
//     counter = counter + 1;
// }

// do {
//     console.log(`The value of counter is ${counter}`);
//     counter = counter + 1;
// } while (counter < 10);

// For Loops 

// Different types of for loops: double
// - for : Loops through a block of code a number of times
// - for/in: loops through the properties of an object
// - for/of: loops through indexes of an array 

// Normal For Loop
// for (counter = 0; counter < 10; counter++) {
//     console.log(`The value of counter is ${counter}`);
// }; 

// For In Loop

// var car = {
//     colour : "blue", 
//     maxSpeed : 300000, 
//     passengers : 4, 
// }; 

// for (property in car ){
//     console.log(`${property}: ${car[property]}`); 
// };

// For Of Loop 

const students = ["Mathew", "Mark", "Luke"]; 

for (student of students ){
    console.log(student)
}; 

