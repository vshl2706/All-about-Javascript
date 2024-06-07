class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// By doiung the below we can access the avaialability of User inside Teacher
class Teacher extends User{
    constructor(username, email, password){
        super(username)     // replace of call function
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);

    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.addCourse()

const masalaChai = new User("masalaChai")
//masalaChai.addCourse()  // This cannot be access by the masalaChai
masalaChai.logMe()