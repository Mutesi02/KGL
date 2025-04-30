const validateUserForm = (e) => {
  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const state = document.getElementById("inputState");
  const gender = document.querySelector("input[name='gender']:checked");
  const terms = document.getElementById("terms");
  const password  = document.getElementById("password");
  const address   = document.getElementById("address");
  const city      = document.getElementById("city");
  const telephone = document.getElementById("telephone");
  const zip       = document.getElementById("zip");

  let errorCount = 0;
//name validation
  const nameRegex = /^[A-Za-z\s]{2,100}$/;
  if (!nameRegex.test(fullname.value.trim())) {
    fullname.style.border = "1px solid red";
    document.getElementById("fullnameError").style.color = "red";
    document.getElementById("fullnameError").textContent =
      "enter a valid full name. Alphabet characters only 2-100";
    errorCount++;
  } else {
    fullname.style.border = "1px solid green";
    document.getElementById("fullnameError").textContent = "";
  }

  //email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    email.style.border = "1px solid red";
    document.getElementById("emailError").style.color = "red";
    document.getElementById("emailError").textContent = "enter a valid email";
    errorCount++;
  } else {
    email.style.border = "1px solid green";
    document.getElementById("emailError").textContent = "";
  }

  //validate state/dropdown
  if (state.value === "" || state.value === "Choose...") {
    state.style.border = "1px solid red";
    document.getElementById("stateError").style.color = "red";
    document.getElementById("stateError").textContent = "select the state";
    errorCount++;
  } else {
    state.style.border = "1px solid green";
    document.getElementById("stateError").textContent = "";
  }

//Validate gender
  if (!gender) {
    document.getElementById("genderError").style.color = "red";
    document.getElementById("genderError").textContent =
      "please select your gender";
    errorCount++;
  } else {
    document.getElementById("genderError").textContent = "";
  }

  //terms validation
  if (!terms.checked) {
    document.getElementById("termsError").style.color = "red";
    document.getElementById("termsError").textContent =
      "please accept the terms and conditions";
    errorCount++;
  } else {
    document.getElementById("termsError").textContent = "";
  }

   // Validate Password: at least 6 characters with one uppercase letter and one number
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password.value)) {
    password.style.border = "1px solid red";
    document.getElementById("passwordError").style.color = "red";
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters, include an uppercase letter and a number";
    errorCount++;
  } else {
    password.style.border = "1px solid green";
  }

  //Validate Address: must not be empty and have at least 5 characters
  if (address.value.trim() === "" || address.value.trim().length < 5) {
    address.style.border = "1px solid red";
    document.getElementById("addressError").style.color = "red";
    document.getElementById("addressError").textContent =
      "Enter a valid address (at least 5 characters)";
    errorCount++;
  } else {
    address.style.border = "1px solid green";
  }

    //Validate City: must not be empty and have at least 2 characters
    if (city.value.trim() === "" || city.value.trim().length < 2) {
        city.style.border = "1px solid red";
        document.getElementById("cityError").style.color = "red";
        document.getElementById("cityError").textContent =
          "Enter a valid city name";
        errorCount++;
      } else {
        city.style.border = "1px solid green";
      }

       // Validate Zip: must be exactly 5 digits (adjust regex as needed)
  const zipRegex = /^\d{5}$/;
  if (!zipRegex.test(zip.value.trim())) {
    zip.style.border = "1px solid red";
    document.getElementById("zipError").style.color = "red";
    document.getElementById("zipError").textContent =
      "Enter a valid 5-digit zip code";
    errorCount++;
  } else {
    zip.style.border = "1px solid green";
  }

   // Validate Telephone: must be non-empty and digits only
   const phoneRegex = /^\d+$/;
   if (telephone.value.trim() === "") {
     telephone.style.border = "1px solid red";
     document.getElementById("telephoneError").style.color = "red";
     document.getElementById("telephoneError").textContent =
       "Telephone is required";
     errorCount++;
   } else if (!phoneRegex.test(telephone.value.trim())) {
     telephone.style.border = "1px solid red";
     document.getElementById("telephoneError").style.color = "red";
     document.getElementById("telephoneError").textContent =
       "Enter a valid telephone number (digits only)";
     errorCount++;
   } else {
     telephone.style.border = "1px solid green";
   }
  // Prevent form submission if there are any errors
  if (errorCount > 0) {
    e.preventDefault();
    return false;
  }
  return true;
};
