function validateContactForm(event) {
    event.preventDefault(); // Prevent actual form submission
  
    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Get error elements
    const errs = {
      name: document.getElementById("name-error"),
      email: document.getElementById("email-error"),
      message: document.getElementById("message-error")
    };
  
    // Clear previous error messages
    for (let key in errs) errs[key].textContent = "";
  
    let isValid = true;
  
    // Validate Name
    if (!name) {
      errs.name.textContent = "Name is required.";
      isValid = false;
    }
  
    // Validate Email
    if (!email) {
      errs.email.textContent = "Email is required.";
      isValid = false;
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      errs.email.textContent = "Please enter a valid email address.";
      isValid = false;
    }
  
    // Validate Message
    if (!message) {
      errs.message.textContent = "Message is required.";
      isValid = false;
    }
  
    // If form is valid, submit it
    if (isValid) {
      alert("Message sent successfully!");
      document.getElementById("contactForm").submit();
    }
  }
  