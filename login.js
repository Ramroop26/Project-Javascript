let val=()=>{


    let email = document.querySelector("#email").value.trim()
    let pass = document.querySelector("#pass").value.trim()

    let erremail = document.querySelector("#erremail")
    let errpass = document.querySelector("#errpass")

       erremail.innerHTML = ""
       errpass.innerHTML = ""

    if(email==""){
        erremail.innerHTML = "Please Enter Your Email"
        erremail.style.border="1px solid red"
        return false
   
    }
    else if(!(email.includes('@') && email.includes('.com'))){
    erremail.innerHTML=" Please Enter Valid Email"
      erremail.style.color="red"
    // erremail.style.border="1px solid red"
    return false

}

else if(pass==""){
    errpass.innerHTML=" Please Enter Correct Password"
      errpass.style.color="red"
  //  errpass.style.border="1px solid red"
    
return false

}

let storedData = JSON.parse(localStorage.getItem("signupData"));
if(!storedData){
    alert("No user found. Please sign up first.");
    location.href = "signup.html"
    return false;
   
}


}