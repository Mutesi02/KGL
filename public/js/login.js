function validateLoginForm(event) {
    event.preventDefault(); // Prevent actual form submission
  
    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    // Get error elements
    const errs = {
      name: document.getElementById("name-error"),
      email: document.getElementById("email-error"),
      password: document.getElementById("password-error"),
    };
  
    // Clear previous errors
    for (let key in errs) errs[key].textContent = "";
  
    let isValid = true;
  
    // Validation logic
    if (!name) {
      errs.name.textContent = "Full name is required.";
      isValid = false;
    }
  
    if (!email || !email.includes("@") || !email.includes(".")) {
      errs.email.textContent = "Please enter a valid email.";
      isValid = false;
    }
  
    if (!password || password.length < 6) {
      errs.password.textContent = "Password must be at least 6 characters.";
      isValid = false;
    }
  
    // Submit form if valid
    if (isValid) {
      alert("Login successful!");
      document.getElementById("authForm").submit();
    }
  }
  
  // Attach the event listener
  document.getElementById("authForm").addEventListener("submit", validateLoginForm);
  
  