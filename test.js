var matchconf= document.getElementById("matchconf");
var passconfirm= document.getElementById("passconfirm").value;
var pwd= document.getElementById("pwd").value;
function matchpwd(){
    // alert("passwords do match");
    if(passconfirm.length !== pwd.length){
        alert("password lengths do not match");
        return false;
    }
    else{
        alert("passwords do match");
        return false;
    }
}
