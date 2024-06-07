function SetUsername(username){
    // Complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    // .call is used to hold the reference => call current execution context kisi or ko pass krdeta hai and explain with example
    SetUsername.call(this, username)

    this.email = email,
    this.password = password
}

const chai = new createUser("chai", "cahi@fb.com", "123")
console.log(chai)