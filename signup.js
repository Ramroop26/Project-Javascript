let valid=()=>{
    let name = document.querySelector("#name").value.trim()
    let number = document.querySelector("#num").value.trim()
    let email = document.querySelector("#email").value.trim()
    let password = document.querySelector("#pass").value.trim()
    let confirmpassword = document.querySelector("#cpass").value.trim()

    let  errorname = document.querySelector("#errname")
    let  errornumber = document.querySelector("#errnum")
    let  erroremail = document.querySelector("#erremail")
    let  errorpassword = document.querySelector("#errpass")
    let  errorconfirmpassword = document.querySelector("#errcpass")


    errorname.innerHTML = ""
    errornumber.innerHTML = ""
    erroremail.innerHTML = ""
    errorpassword.innerHTML = ""
    errorconfirmpassword.innerHTML = "" // clear error messages

    if(name == "")
    {
        errorname.innerHTML = "Please invalid Name";
          document.element.style.backgroundColor = "red";
          errname.style.border="1px solid red"

        return false;
    }

    else if(number == "")
    {
        errornumber.innerHTML = "Please invalid Number";
        // errorname.innerHTML = "" this is method to clear the error message
        errornumber.style.border="1px solid red"
     
        return false;
    }

    else if(number.length!=10)
    {
        errornumber.innerHTML = "Please Enter 10 Digit Number"
        errornumber.style.border="1px solid red"
     
        return false;
    }

    else if(isNaN(number))
        
    {
        errornumber.innerHTML = "Please Enter Currect 10 Digit Number"
        errornumber.style.border="1px solid red"
     
        return false;
    } 
    else if(email == ""){
        erroremail.innerHTML = "Please invalid Email";
        erroremail.style.border="1px solid red"
        return false;
    }    

    else if(!(email.includes("@") && email.includes(".com")))
        
    {
    erroremail.innerHTML = "Please Enter Valid Email"
    erroremail.style.border="1px solid red"

    return false;
    }

    else if(password == ""){
        errorpassword.innerHTML = "Please invalid Password";
        errorpassword.style.border="1px solid red"
        return false;
        }

    else if(!password.match(/[1234567890]/)
         && password.match(/[!@#$%^&*()]/)
         && password.match(/[A-Z]/) 
         && password.match(/[a-z]/) ){
            errorpassword.innerHTML = "Please Enter Valid Password"
            errorpassword.style.border="1px solid red"

            return false;
         }


    else if(password!=confirmpassword)
    {
    errorconfirmpassword.innerHTML = "Please Enter Same Password"
    errorconfirmpassword.style.border="1px solid red"
    document.querySelector("#cpass").value=""
    document.querySelector("#cpass").focus()

    return false;
    }

    else if(confirmpassword == "")
    {
    errorconfirmpassword.innerHTML = "Please Confirm Password"
    errorconfirmpassword.style.border="1px solid red"
     return false;

    }

    let Data = {
        Name:name,
        Email:email,
        Number:num,
        Password:pass
    };

    localStorage.setItem("signupData", JSON.stringify(Data));
    alert("Signup Successful ! Redirecting to login...");
    window.location.href='login.html'
    return false;


}