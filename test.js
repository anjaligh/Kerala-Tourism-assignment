var matchconf=document.getElementById("matchconf");
var passconfirm= document.getElementById("passconfirm");
var pwd= document.getElementById("pwd");
function matchpwd(){
    if((passconfirm.value)===(pwd.value)){
        matchconf.innerHTML="matching";
        return true
    }
    else{
        matchconf.innerHTML="not";
        return false;
    }
}
