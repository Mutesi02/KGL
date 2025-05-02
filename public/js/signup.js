function validateSignUpForm(event) {
  event.preventDefault();

  // Clear previous error messages
  document.querySelectorAll(".text-danger").forEach(el => el.remove());
  const strengthLabel = document.getElementById("passwordStrength");
  if (strengthLabel) strengthLabel.remove();

  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const branch = document.getElementById("branchname");
  const roleOptions = document.getElementsByName("role");

  function showError(input, message) {
    const error = document.createElement("div");
    error.className = "text-danger small mt-1";
    error.textContent = message;
    input.insertAdjacentElement("afterend", error);
    isValid = false;
  }

  // Full Name
  if (!name.value.trim()) showError(name, "Full name is required.");

  // Email
  if (!email.value.trim()) {
    showError(email, "Email is required.");
  } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.value.trim())) {
    showError(email, "Enter a valid email address.");
  }

  // Password Strength Logic
  const pwd = password.value;
  const strengthMsg = document.createElement("div");
  strengthMsg.id = "passwordStrength";
  strengthMsg.className = "small mt-1";

  let strength = 0;
  if (pwd.length >= 6) strength++;
  if (/[A-Z]/.test(pwd)) strength++;
  if (/[0-9]/.test(pwd)) strength++;
  if (/[\W_]/.test(pwd)) strength++;

  const strengthText = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];
  const strengthColor = ["text-danger", "text-warning", "text-info", "text-primary", "text-success"];
  strengthMsg.textContent = `Password Strength: ${strengthText[strength]}`;
  strengthMsg.classList.add(strengthColor[strength]);
  password.insertAdjacentElement("afterend", strengthMsg);

  if (!pwd) {
    showError(password, "Password is required.");
  } else if (pwd.length < 6) {
    showError(password, "Password must be at least 6 characters.");
  }

  // Confirm Password
  if (confirmPassword.value !== pwd) {
    showError(confirmPassword, "Passwords do not match.");
  }

  // Role
  const roleSelected = Array.from(roleOptions).some(option => option.checked);
  if (!roleSelected) {
    const roleDiv = document.getElementById("role");
    showError(roleDiv, "Please select a role.");
  }

  // Branch
  if (!branch.value) showError(branch, "Please select a branch.");

  if (isValid) {
    event.target.submit();
  }
}
