class Abstract{
    name;
    email;
    #password;

    constructor(){}

    #validateEmail(email){
        return true;
    }
    #validatePassword(password){
        return true;
    }

    signUp(name,email,password){
        let isValidate = false;

        isValidate = this.#validateEmail(email);
        isValidate &&= this.#validatePassword(password);

        if(isValidate){
            this.name = name;
            this.email = email;
            this.#password = password;
            console.log("Registered Successfully");
        }
        else{
            console.log("Please enter correct details!");
        }
    }

    login(email,passsword){
        if(email == this.email && passsword == this.#password){
            console.log("login Successful");
        }
        else{
            console.log("Authentication Failed");
        }
    }
}

const person = new Abstract();
person.signUp('Manisha','manisha@gmail.com','password');

person.login('manish@gmail.com','password');