function register(){

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let password = document.getElementById("password").value

if(name=="" || email=="" || password==""){
alert("Please fill all fields")
return
}

localStorage.setItem(email,password)

console.log("User Registered:",email)

alert("Registration Successful")

window.location="index.html"

}


function login(){

let email=document.getElementById("email").value
let password=document.getElementById("password").value

let storedPassword=localStorage.getItem(email)

if(password===storedPassword){

console.log("User Login Success:",email)

alert("Login Successful")

window.location="dashboard.html"

}else{

console.log("Login Failed:",email)

alert("Invalid Login")

}

}


function logout(){

console.log("User Logged Out")

window.location="index.html"

}
