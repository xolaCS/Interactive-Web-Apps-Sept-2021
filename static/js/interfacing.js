let obj = { 
    name: "Sophie", 
    age: 19, 
}

JSON.stringify(obj);

console.log(obj);

var myJSON = '{ "name":"Cassy", "age":22, "city":"Cape Town" }';
var myJSObj = JSON.parse(myJSON);
console.log(`typeof myJSObj ${ typeof myJSObj}`);
console.log(`typeof myJSON ${ typeof myJSON}`);
