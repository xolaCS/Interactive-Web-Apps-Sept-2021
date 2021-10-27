class Pet {
    constructor(name, type, breed, gender, diet) {
      this.name = name;
      this.type = type;
      this.breed = breed;
      this.gender = gender;
      this.diet = diet;
      this._treats = 0;
    }
  
    giveTreat() {
      console.log(++this._treats);
    };
  
    get treats() {
      console.log(this._treats);
    };
  }

let sam = new Pet("Samson", "dog", "Collie", "F", ["meat", "veg", "fish"]);

sam.giveTreat();
sam.giveTreat();
sam.giveTreat();
sam.treats; //1

// class Animal extends Pet {
//     constructor(name, type, breed, gender, diet, wild, place) {
//       super(name, type, breed, gender, diet);
//       this.wild = wild;
//       this.place = place;
//     }
// }

// function Animal(name, type, breed, gender, diet, wild, place) {
//     Pet.call(this, name, type, breed, gender, diet);
//     this.wild = wild;
//     this.place = place;
// }

// Animal.prototype = Object.create(Pet.prototype);


// let jim = new Animal(true, "Australia", "Jimando", "lizard", "Iguana", "F", ["insects", "veg", "small fish"]);


console.log(`Today's date is ${Date.now()}`); 

class GenericClass {
    static staticProperty = "staticProperty"; 
    static staticMethod() { 
        console.log("Static method is called")
    }
}

console.log(GenericClass.staticMethod());
console.log(GenericClass.staticProperty);



















