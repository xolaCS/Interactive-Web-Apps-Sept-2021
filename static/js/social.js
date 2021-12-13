

// let user = {
//     name: "John", 
//     surname: "Smith", 
//     email: "john@gmail.com", 
//     password: "password"
// }; 

// let user1 = {
//     name: "Mary", 
//     surname: "Smith", 
//     email: "mary@gmail.com", 
//     password: "password01"
// }; 

let _name = "Xola";

// Blueprint for new object 
class Profile {
    _name;
    _surname;
    _email;
    _password;
    _interests = [];
    constructor(name, surname, email, password) {
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._password = password;
    }

    addInterest(category) {
        this._interests.push(category);
        console.log(this._interests);
    }

    set interest(category) {
        this._interests.push(category);
    }

    get password(){
        // Sanitise respond 

        return this._password; 
    }

    set password(pass) {
        // Santise
        switch (true) {
            case pass.length < 5:
                console.log("PASSWORD TOO SHORT");
                break; 
            case pass.uppercase() == "PASSWORD":
                console.log("`PASSWORD` not acceptable as password");
            case pass == "1234":
                console.log("PASSWORD NOT SECURE");
                break;
            default:
                this._password = pass; 
                break;
        }
        // this._password = pass;
    }

};

let user0 = new Profile("John", "Smith", "john@gmail.com", "password");
let user1 = new Profile("Mary", "Smith", "mary@gmail.com", "password");
let user2 = new Profile("Mark", "Smith", "mark@gmail.com", "password");

let users = [];
let rawData = {
    
}

for (let index = 0; index < 3; index++) {
    users[index] = new Profile("John", "Smith", "john@gmail.com", "password");   
}

console.log(user0);

// user0.addInterest("running")

user0.interest = "running";
user0.password = "1234";



console.log(user0.password);


let user4Interest = "swimming";








