var name1j=document.getElementById("name1");
   var labelnj=document.getElementById("validn");
   function validationo(){
       let name1RegExp= /^([A-Za-z ]+)$/
        if (name1RegExp.test(name1j.value)){
            labelnj.innerText="Valid";
           labelnj.style.color="green";
           labelnj.style.fontSize="15px";
         return true;
        }
        else {
           labelnj.innerText="Invalid!";
           labelnj.style.color="red";
           labelnj.style.fontSize="15px";
           return false;
        }
   }
   
   // lastname
   
   var name2j=document.getElementById("name2");
   var labeln2=document.getElementById("validn2");
   function validationt(){
       let name2RegExp= /^([A-Za-z ]+)$/
        if (name2RegExp.test(name2j.value)){
            labeln2.innerText="Valid";
           labeln2.style.color="green";
           labeln2.style.fontSize="15px";
            return true;
        }
        else {
           labeln2.innerText="Invalid!";
           labeln2.style.color="red";
           labeln2.style.fontSize="15px";
           return false;
   
        }
   }
   




// mail
let email= document.getElementById("email");
let validmail= document.getElementById("validmail");
function validationemail(){
    let regexpmail = /^([a-z\.-]+)([a-z0-9\.-]+)@([a-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
    if (regexpmail.test(email.value)){
        validmail.innerHTML="Valid";
        validmail.style.color= "green";
        validmail.style.fontSize="15px";
        return true;
    }
   
    else{
        validmail.innerHTML="Invalid!";
        validmail.style.color= "red";
        validmail.style.fontSize="15px";
        return false;
    }
}


let phone= document.getElementById("phone");
let validph= document.getElementById("validph");
function validationph(){
    let regexpmailn = /^([0-9\.-]{10})$/
    let regexpmail = /^([0-9\.-]{3})-([0-9\-]{3})-([0-9]{4})$/
    let regexpmail1 = /^([0-9\.-]{3}) ([0-9\-]{3}) ([0-9]{4})$/
    let regexpmail2 = /^([0-9\.-]{3}).([0-9\-]{3}).([0-9]{4})$/
    if (regexpmail.test(phone.value)){
        validph.innerHTML="Valid";
        validph.style.color= "green";
        validph.style.fontSize="15px";
        return true;
    }
    else if (regexpmailn.test(phone.value)){
        validph.innerHTML="Valid";
        validph.style.color= "green";
        validph.style.fontSize="15px";
        return true;
    }
    else if (regexpmail1.test(phone.value)){
        validph.innerHTML="Valid";
        validph.style.color= "green";
        validph.style.fontSize="15px";
        return true;
    }
    else if (regexpmail2.test(phone.value)){
        validph.innerHTML="Valid";
        validph.style.color= "green";
        validph.style.fontSize="15px";
        return true;
    }
   
    else{
        validph.innerHTML="Invalid!";
        validph.style.color= "red";
        validph.style.fontSize="15px";
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

  let pwd= document.getElementById("pwd");
let validpwd= document.getElementById("validpwd");
function validationpwd(){
    let regExppwd= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})$/
    let regExppwd1= /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))'$/
    if (regExppwd.test(pwd.value)){
        validpwd.innerHTML="Password is Valid";
        validpwd.style.color= "green";
        validpwd.style.fontSize="15px";
        return true;
    }
    else if (regExppwd1.test(pwd.value)){
        validpwd.innerHTML="Password is Valid";
        validpwd.style.color= "green";
        validpwd.style.fontSize="15px";
        return true;
    }
    else{
        validpwd.innerHTML="Invalid Password";
        validpwd.style.color= "red";
        validpwd.style.fontSize="15px";
        return false;
    }
}


var msg= document.getElementById("message");
var str= document.getElementById("strength");
var pass= document.getElementById("pwd");

pass.addEventListener('input', () => {
    if (pass.value.length > 0){
        msg.style.display="block";
    }
    else{
        msg.style.display="none";
    }
    if (pass.value.length < 4){
        pass.style.background ="red";
        pass.style.color="white";
        // str.innerHTML="Weak";
        // str.style.color="red"
    }
    else if (pass.value.length > 4 && pass.value.length < 8){
        pass.style.background ="orange";
        pass.style.color="white";
        // str.innerHTML="Medium";
        // str.style.color="orange"
    }
    else if (pass.value.length >= 8){
        pass.style.background ="green";
        pass.style.color="white";
        // str.innerHTML="Strong"
        // str.style.color="green"

    }
})

let matchconf= document.querySelector('#matchconf');
let passconfirm1= document.querySelector('#passconfirm');
let pwd1= document.getElementById('#pwd');
function checkpassword(){
    if((pwd1.value) !== (passconfirm1.value)){
        alert("passwords do match");
        return false;
    }
    else{
        alert("passwords do not match");
        return true;
    }
}
