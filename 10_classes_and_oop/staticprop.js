class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }
    static createId(){  // By adding the static keyowrd we stop the access of createId function
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())      // This will throws an error

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
// console.log(iphone.createId())  // this will throws an error createId is not a function