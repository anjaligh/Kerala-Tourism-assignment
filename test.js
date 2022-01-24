// var matchconf= document.getElementById("matchconf");
// var passconfirm= document.getElementById("passconfirm").value;
// var pwd= document.getElementById("pwd").value;
// function matchpwd(){
//     // alert("passwords do match");
//     if(passconfirm != pwd){
//         alert("password lengths do not match");
//         return false;
//     }
    
//     else{
//         alert("passwords do match");
//         return true;
//     }
// }
function checkpass(){
    let pwd= document.getElementById("pwd").value;
    let passconfirm=document.getElementById("passconfirm").value;
    console.log(pass,confpassword);
    let matchconf= document.getElementById("matchconf");
    if(pwd.length != 0){
        if (pwd == passconfirm){
            matchconf.textContent="passwords match";
            // return true;
        }
        else{
            matchconf.textContent="passwords do not match";
            // return false;
        }
    }


}