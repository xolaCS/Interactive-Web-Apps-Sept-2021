

// let name = "John"; 
// let age = 27; 
// let isVaccinated = false; // Can also be true 
// let children = null;
// let courseMarks = undefined; 

const student1 = {
    name : "John", 
    age : 27, 
    isVaccinated: false, 
    children: null, 
    courseMarks: undefined
}; 

const student2 = {
    name : "Mary", 
    age : 35, 
    isVaccinated: true, 
    children: null, 
    courseMarks: undefined
}; 

const student3 = {
    name : "Michael", 
    age : 45, 
    isVaccinated: false, 
    children: null, 
    courseMarks: undefined
}; 

let classRoomArr = [student1, student2, student3, {
    name: "Natasha", 
    age: 30, 
    isVaccinated: false, 
    children: [
        {
            name: "Daniel", 
            age: 5
        }, 
        {
            name: "Mark", 
            age: 10
        }
    ], 
    courseMarks: []
}]; 

classRoomArr.push({
    name: "Xola", 
    age: 30, 
    isVaccinated: true, 
    children: null, 
    courseMarks: []
}); 



// console.log(`student.name : ${student.name}`); 
// console.log(`student.age: ${student.age}`); 
console.log(`student.children: ${student1['children']}`); 

console.log(classRoomArr); 

classRoomArr.pop(); 

console.log("Last Element Removed")
console.log(classRoomArr); 


const myArr = [
    ["red", "green", "blue"], 
    ["yellow", "blue", "orange"], 
    ["yellow", "blue", "orange"], 
    ["yellow", "blue", "orange"],
    ["yellow", "blue", "orange"] ]; 

// const schoolArr = [classRoomArr1, classRoomArr2 ...]




