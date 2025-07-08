let valid = () => {
    let name = document.querySelector("#name").value.trim();
    let number = document.querySelector("#num").value.trim();
    let email = document.querySelector("#email").value.trim();
    let password = document.querySelector("#pass").value.trim();
    let confirmpassword = document.querySelector("#cpass").value.trim();

    let errorname = document.querySelector("#errname");
    let errornumber = document.querySelector("#errnum");
    let erroremail = document.querySelector("#erremail");
    let errorpassword = document.querySelector("#errpass");
    let errorconfirmpassword = document.querySelector("#errcpass");

    // Clear all error messages
    errorname.innerHTML = "";
    errornumber.innerHTML = "";
    erroremail.innerHTML = "";
    errorpassword.innerHTML = "";
    errorconfirmpassword.innerHTML = "";

    // Remove red borders if any
    document.querySelector("#name").style.border = "";
    document.querySelector("#num").style.border = "";
    document.querySelector("#email").style.border = "";
    document.querySelector("#pass").style.border = "";
    document.querySelector("#cpass").style.border = "";

    // Name validation
    if (name === "") {
        errorname.innerHTML = "Please enter a valid name";
        document.querySelector("#name").style.border = "1px solid red";
        return false;
    }

    // Number validation
    if (number === "") {
        errornumber.innerHTML = "Please enter your number";
        document.querySelector("#num").style.border = "1px solid red";
        return false;
    }

    if (number.length !== 10 || isNaN(number)) {
        errornumber.innerHTML = "Number must be a 10-digit numeric value";
        document.querySelector("#num").style.border = "1px solid red";
        return false;
    }

    // Email validation
    if (email === "") {
        erroremail.innerHTML = "Please enter your email";
        document.querySelector("#email").style.border = "1px solid red";
        return false;
    }

    if (!(email.includes("@") && email.endsWith(".com"))) {
        erroremail.innerHTML = "Email must include '@' and end with '.com'";
        document.querySelector("#email").style.border = "1px solid red";
        return false;
    }

    // Password validation
    if (password === "") {
        errorpassword.innerHTML = "Please enter your password";
        document.querySelector("#pass").style.border = "1px solid red";
        return false;
    }

    if (!(password.match(/[0-9]/) && password.match(/[!@#$%^&*()]/) && password.match(/[A-Z]/) && password.match(/[a-z]/))) {
        errorpassword.innerHTML = "Password must include uppercase, lowercase, digit, and special character";
        document.querySelector("#pass").style.border = "1px solid red";
        return false;
    }

    // Confirm password validation
    if (confirmpassword === "") {
        errorconfirmpassword.innerHTML = "Please confirm your password";
        document.querySelector("#cpass").style.border = "1px solid red";
        return false;
    }

    if (password !== confirmpassword) {
        errorconfirmpassword.innerHTML = "Passwords do not match";
        document.querySelector("#cpass").style.border = "1px solid red";
        document.querySelector("#cpass").value = "";
        document.querySelector("#cpass").focus();
        return false;
    }

    // Store data
    let Data = {
        Name: name,
        Email: email,
        Number: number,
        Password: password
    };

    localStorage.setItem("signupData", JSON.stringify(Data));
    alert("Signup Successful! Redirecting to login...");
    window.location.href = 'login.html';
    return false; // Prevent form submission
};
