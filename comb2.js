var name1j=document.getElementById("name1");
var labelnj=document.getElementById("validn");
var name2j=document.getElementById("name2");
var labeln2=document.getElementById("validn2");
function validation(){
    let name1RegExp= /^([A-Za-z ]+)$/
     if (name1RegExp.test(name1j.value)){
        a=1;
        console.log(a);
     }
     else {
        labelnj.innerText="letters and spaces only!";
        labelnj.style.color="red";
         a=0;
         console.log(a);
     }
     let name2RegExp= /^([A-Za-z ]+)$/
     if (name2RegExp.test(name2j.value)){
        b=1;
        console.log(b);
     }
     else {
        labeln2.innerText="letters and spaces only!";
        labeln2.style.color="red";
         b=0;
         console.log(b);
     }
}
if (a=1){
    return true;
}
else{
    return false;
}

// lastname



// mail
// let email= document.getElementById("email");
// let validmail= document.getElementById("validmail");
// function validation(){
//     let regexpmail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
//     if (regexpmail.test(email.value)){
//         validmail.innerHTML="valid";
//         validmail.style.color= "green";
//         c=1;
//         console.log(c);
//     }
   
//     else{
//         validmail.innerHTML="Invalid mail Id";
//         validmail.style.color= "red";
//         c=0;
//         console.log(c);
//     }
// }


// let phone= document.getElementById("phone");
// let validph= document.getElementById("validph");
// function validation(){
//     let regexpmail = /^([0-9\.-]{3})-([0-9\-]{3})-([0-9]{4})$/
//     let regexpmail1 = /^([0-9\.-]{3}) ([0-9\-]{3}) ([0-9]{4})$/
//     let regexpmail2 = /^([0-9\.-]{3}).([0-9\-]{3}).([0-9]{4})$/
//     if (regexpmail.test(phone.value)){
//         validph.innerHTML="valid";
//         validph.style.color= "green";
//         d=1;
//         console.log(d);
//     }
    
//     else if (regexpmail1.test(phone.value)){
//         validph.innerHTML="valid";
//         validph.style.color= "green";
//         d=1;
//         console.log(d);
//     }
//     else if (regexpmail2.test(phone.value)){
//         validph.innerHTML="valid";
//         validph.style.color= "green";
//         d=1;
//         console.log(d);
//     }
   
//     else{
//         validph.innerHTML="Invalid phone number";
//         validph.style.color= "red";
//         d=0;
//         console.log(d);
//     }
// }


