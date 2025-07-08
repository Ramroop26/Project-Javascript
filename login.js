let val = () => {
  let email = document.querySelector("#email").value.trim();
  let pass = document.querySelector("#pass").value.trim();

  let erremail = document.querySelector("#erremail");
  let errpass = document.querySelector("#errpass");

  // Clear previous errors
  erremail.innerHTML = "";
  errpass.innerHTML = "";
  document.querySelector("#email").style.border = "";
  document.querySelector("#pass").style.border = "";

  // Email validation
  if (email === "") {
    erremail.innerHTML = "Please enter your email";
    document.querySelector("#email").style.border = "1px solid red";
    return false;
  } else if (!(email.includes("@") && email.endsWith(".com"))) {
    erremail.innerHTML = "Please enter a valid email";
    document.querySelector("#email").style.border = "1px solid red";
    return false;
  }

  // Password validation
  if (pass === "") {
    errpass.innerHTML = "Please enter your password";
    document.querySelector("#pass").style.border = "1px solid red";
    return false;
  }

  // Fetch stored data
  let storedData = JSON.parse(localStorage.getItem("signupData"));

  if (!storedData) {
    alert("No user found. Please sign up first.");
    window.location.href = "signup.html";
    return false;
  }

  // Match credentials
  if (storedData.Email === email && storedData.Password === pass) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", storedData.Name);
    alert("Login Successful! Redirecting to home...");
    window.location.href = "book.html"; // or your home page
    return false;
  } else {
    alert("Invalid email or password");
    return false;
  }
};
