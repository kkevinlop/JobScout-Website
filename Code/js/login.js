function validateLogin() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
  
    if (username.value === "your_username" && password.value === "your_password") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }
  