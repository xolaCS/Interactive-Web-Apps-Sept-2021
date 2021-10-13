const numArr = [2,100, 6]

const squareFunct = (input) => {
    return input * input; 
};

for (num of numArr) {
    console.log(`The square of ${num} is ${squareFunct(num)} `); 
};

function myFunction(param1, param2, ...restParams) {
    //Process any amount of arguments
}