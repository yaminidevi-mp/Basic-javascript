class User{
    #password;
    constructor(name, username, passsword){
        this.name = name;
        this.username = username;
        this.#password = passsword;
    }
    login(username, password){
        if(this.username === username && this.#password == password){
            console.log("Login successful");
        }
        else{
            console.log("Authentication failed");
        }
    }
    setPassword(){ //setter method
       // this.#password = newPassword;
        console.log(this.#password);
    }
}

const person = new User('Harish Kanna','Harish','password');
const js = new User('JavaScript','js','script');

person.login('Harish','password');
js.login('Java','script');

console.log('Name: '+person.name)
console.log("Username: "+person.username);

console.log("Password: "+ person.passsword);
//console.log("Password: "+ person.#passsword);

person.setPassword(); //password

console.log('Name: '+js.name)
console.log("Username: "+js.username);

console.log("Password: "+ js.passsword);
//console.log("Password: "+ js.#passsword);