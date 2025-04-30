document.getElementById("toggleForm").addEventListener("click", function(event) {
    event.preventDefault();
    let formTitle = document.getElementById("formTitle");
    let nameField = document.getElementById("nameField");
    let roleField = document.getElementById("roleField");
    let submitBtn = document.querySelector("#authForm button");
  
    if (formTitle.innerText === "SignIn") {
        formTitle.innerText = "SignIn";
        nameField.style.display = "none";
        roleField.style.display = "none";
        submitBtn.innerText = "Login";
        this.innerText = "Don't have an account? Register";
    } else {
        formTitle.innerText = "login";
        nameField.style.display = "block";
        roleField.style.display = "block";
        submitBtn.innerText = "login";
        this.innerText = "Already have an account? Login";
    }
  });
  