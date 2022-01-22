


function validation(){
    var name1j=document.getElementById("name1");
    var labelnj=document.getElementById("validn");
    var name2j=document.getElementById("name2");
    var labeln2=document.getElementById("validn2");
    let email= document.getElementById("email");
let validmail= document.getElementById("validmail");
let phone= document.getElementById("phone");
let validph= document.getElementById("validph");
    let name1RegExp= /^([A-Za-z ]+)$/
    let name2RegExp= /^([A-Za-z ]+)$/
    let regexpmail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
    let regexpmail3 = /^([0-9\.-]{3})-([0-9\-]{3})-([0-9]{4})$/
    let regexpmail1 = /^([0-9\.-]{3}) ([0-9\-]{3}) ([0-9]{4})$/
    let regexpmail2 = /^([0-9\.-]{3}).([0-9\-]{3}).([0-9]{4})$/
     if (name1RegExp.test(name1j.value) && name2RegExp.test(name2j.value)){
        return true;
     }

    //  && (regexpmail.test(email.value)) && ((regexpmail3.test(phone.value)) || (regexpmail1.test(phone.value)) || (regexpmail2.test(phone.value)))
    //  else {
    //     labelnj.innerText="Letters & spaces only!";
    //     labelnj.style.color="red";
    //      return false;
    //  }
     
    //  //  last name
     
    
    //  if (){
    //     return true;
    //  }
    //  else {
    //     labeln2.innerText="letters and spaces only!";
    //     labeln2.style.color="red";
    //      return false;
    //  }

     
}




// function validation(){
    
//     if (){
//         validmail.innerHTML="valid";
//         validmail.style.color= "green";
//         return true;
//     }
   
//     else{
//         validmail.innerHTML="Invalid mail Id";
//         validmail.style.color= "red";
//         return false;
//     }
// }

// // phone number validation

// function validation(){
    
//     if {
//         validph.innerHTML="valid";
//         validph.style.color= "green";
//         return true;
//     }
    
//     else if (regexpmail1.test(phone.value)){
//         validph.innerHTML="valid";
//         validph.style.color= "green";
//         return true;
//     }
//     else if (regexpmail2.test(phone.value)){
//         validph.innerHTML="valid";
//         validph.style.color= "green";
//         return true;
//     }
   
//     else{
//         validph.innerHTML="Invalid phone number";
//         validph.style.color= "red";
//         return false;
//     }
// }