  
  //form validation

  function activateButton(element) {
    var submit = document.getElementById("submit");
    if(element.checked){
      document.getElementById("submit").disabled = false;
      alert("Please Agree to Terms and Condition");
    }else{
      document.getElementById("submit").disabled = true;
    }
  }

  function validateData() {
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confpassword = document.getElementById("confpassword");
    var username = document.getElementById("username");
    var gender1 = document.getElementById("male");
    var gender2 = document.getElementById("female");
    var birthdate = document.getElementById("birth");
  
    if (firstname.value.length < 3) {
      alert("Full name must be at least 3 characters");
    } 
    else if (lastname.value.length < 3) {
      alert("Full name must be at least 3 characters");
    }
    else if (!email.value.includes("@") || !email.value.includes(".")) {
      alert("Invalid email entered");
    } 
    else if (!birthdate.value) {
      alert("Please select date of birth");
    } 
    else if (!gender1.checked && !gender2.checked) {
      alert("Gender must be chosen");
    } 
    else if (username.value.length <  8) {
      alert("Username must be at least 8 characters");
    } 
    else if (password.value.length < 6) {
      alert("Password must be at least 6 characters");
    } 
    else if (password.value != confpassword.value) {
      alert("Passwords don't match");
    } 
    else {
      alert("Success!");
    }
  }