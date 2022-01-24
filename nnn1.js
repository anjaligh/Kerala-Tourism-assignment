function checkpass(){
    let pass= document.getElementById("password").value;
    let confpassword=document.getElementById("confpass").value;
    console.log(pass,confpassword);
    let message= document.getElementById("message");
    if(pass.length != 0){
        if (pass == confpassword){
            message.textContent="passwords match";
            return true;
        }
        else{
            message.textContent="passwords do not match";
            return false;
        }
    }


}