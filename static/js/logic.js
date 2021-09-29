

let currentPassword = '';
let age = 24;

console.log(age);
let x = null;
const y = undefined;
console.log(y);


// document.getElementById("myButton").onclick = function() {
//     document.getElementById("myText").innerHTML = updatedOutput; 
// }

// function myFunction() {

// }

// const answer = prompt("Please enter a number? "); 

// let userOutput;

// let a = 10;
// let b = 20; //

// if (a == b) {
//     console.log("numbers are equal ");
// } else {
//     console.log("numbers are not equal ");
// }

// // is NOT equal to 

// let c = "apple";
// let d = "orange";


// if (c != d) {
//     console.log("fruits are not  equal ");
// } else {
//     console.log("fruits are  equal ");
// }

// // is strict  equal to 

// let e = 10;
// let f = "10";

// console.log(typeof e);
// console.log(typeof f);
// console.log(e === f);

// // is not equal too strict check for

// let g = 20;
// let h = "20";

// console.log(typeof g);
// console.log(typeof h);
// console.log(g != h);

// console.log(5 < 10);
// console.log(25 > 10);

// // Making Decisions with Logical Operators

// // var petrol = 499; 
// // var oil = 1000; 

// // if ((petrol < 500) || (oil < 500)) {
// //     console.log("You are not going anywhere");
// // } else {
// //     console.log("Lets go! ");
// // }

// // Logic not operator 
// const petrol = 650;
// const oil = 1000;

// if (!(petrol < 500)) {
//     console.log("Lets go! ");
// } else {
//     console.log("You are not going anywhere");
// }


// if ( !isNaN(answer) ) {
//     userOutput = `The answer you have provided is ${answer}`;
// } else {
//     userOutput = `input is invalid`;
// };

// alert(userOutput); 

const myFunction = () => {

    let day;
    let today = new Date().getDay();

    // Switch statements

    switch (today) {
        case 0: {
            day = "Sunday";
            break;
        }
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
        default:  {
            day = "NOT APPLICABLE";
            break; 
        }
    }
    const updatedOutput = `Today is ${day}`;

    console.log(updatedOutput);
    document.getElementById("myText").innerHTML = updatedOutput;
};

// let student1 = "Bradley"; 
// let student2 = "Kyle"; 
// let student3 = "Sam"; 

let student1 = { name : "Bradley", avg : "80%", gender : "Male"} ; 
let student2 = { name : "Kyle", "full name": "Kyle Louw",  avg : "85%", gender : "Male"} ; 
let student3 = { name : "Sam", avg : "80%", gender : undefined } ; 

const classArray = ["Bradley","Kyle", "Sam" ]; 

const FEDClassArray = [student1,student2];
const JSClassArray = [student3];

// Two scenarios
// Extending an existing array 

// JSClassArray.push(...FEDClassArray); 


//  const AllStudentArr = JSClassArray.concat(FEDClassArray); 


FEDClassArray.pop(); 
console.log(FEDClassArray) ;  



// console.log(AllStudentArr)


console.log(student2["full name"])
console.log(student2.name)


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');

console.log(months)

months.splice(4, 1, 'May');

console.log(months)

document.getElementById("classList").innerHTML = classArray.map( student => 
    `<li> ${student }</li>`
).join("")



        // class Pet {
        //     constructor(uniqueName){
        //         this.Name = uniqueName; 
        //     }
        // }

        // let myPet = new Pet("Bobby");