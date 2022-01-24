// mail
let email= document.getElementById("email");
let validmail= document.getElementById("validmail");
function validationemail(){
    let regexpmail = /^([a-z\.-]+)([a-z0-9\.-]+)@([a-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
    if (regexpmail.test(email.value)){
        validmail.innerHTML="valid";
        validmail.style.color= "green";
        return true;
    }
   
    else{
        validmail.innerHTML="Invalid mail Id";
        validmail.style.color= "red";
        return false;
    }
}

let pwd= document.getElementById("pwd");
let validpwd= document.getElementById("validpwd");
function validationpwd(){
    let regExppwd= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})$/
    let regExppwd1= /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))'$/
    if (regExppwd.test(pwd.value)){
        validpwd.innerHTML="valid";
        validpwd.style.color= "green";
        return true;
    }
    else if (regExppwd1.test(pwd.value)){
        validpwd.innerHTML="valid";
        validpwd.style.color= "green";
        return true;
    }
    else{
        validpwd.innerHTML="Invalid Password";
        validpwd.style.color= "red";
        return false;
    }
}

function myFunction() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  