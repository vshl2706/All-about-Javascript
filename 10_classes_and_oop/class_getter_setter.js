class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    // Getter and setter are defined simulatneously
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abcd")
console.log(hitesh.password)
console.log(hitesh.email)
