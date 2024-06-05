class User{
    #password;
    email;
    name

    constructor(name,email,pass){
        this.name = name;
        this.email = email;
        this.#password = pass;
    }

    login(email,pass){
        if(this.email == email && this.#password == pass){
            console.log("Login Successfull");
        }
        else{
            console.log("Authentication Failed");
        }
    }
}

class Author extends User{
    #no_of_post;
    constructor(email,pass){
        super(email,pass);
        this.#no_of_post = 0;
    }
    createPost(content){
        this.#no_of_post++;
    }
    getPost(){
        return this.#no_of_post;
    }
}

class Admin extends User{
    constructor(email,pass){
        super(email,pass);
    }
    removeUser(){
        console.log("User Removed Successfully");
    }
}

const person = new Author('Lilly','lilly@gmail.com','lilly');
person.login('lilly@gmail.com','lilly');
person.createPost("Java Script Methods");
console.log(person.getPost());

const admin1 = new Admin('Ganesh Kumar','ganesh@gmail.com','Ganesh');
admin1.login('ganesh@gmail.com','ganesh');
admin1.removeUser();

