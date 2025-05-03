function validateDeferredForm(event) {
  event.preventDefault(); // Stop form submission
  let isValid = true;

  // Clear previous errors
  const errorSpans = document.querySelectorAll("span.text-danger");
  errorSpans.forEach(span => span.textContent = "");

  // Get form fields
  const buyerName = document.getElementById("buyerName");
  const nationalId = document.getElementById("nationalId");
  const location = document.getElementById("location");
  const contacts = document.getElementById("contacts");
  const amountDue = document.getElementById("amountDue");
  const salesAgent = document.getElementById("salesAgent");
  const dueDate = document.getElementById("dueDate");
  const produceName = document.getElementById("produceName");
  const produceType = document.getElementById("produceType");
  const tonnage = document.getElementById("tonnage");
  const dispatchDate = document.getElementById("dispatchDate");

  // Validation logic
  if (!buyerName.value.trim()) {
    document.getElementById("buyerName-error").textContent = "Buyer name is required.";
    isValid = false;
  }

  const idPattern = /^[A-Z0-9]{14,20}$/i; // Accept alphanumeric ID between 14-20 characters
  if (!nationalId.value.trim()) {
    document.getElementById("nationalId-error").textContent = "National ID is required.";
    isValid = false;
  } else if (!idPattern.test(nationalId.value.trim())) {
    document.getElementById("nationalId-error").textContent = "National ID must be 14–20 letters or digits.";
    isValid = false;
  }

  if (!location.value.trim()) {
    document.getElementById("location-error").textContent = "Location is required.";
    isValid = false;
  }

  if (!contacts.value.trim()) {
    document.getElementById("contacts-error").textContent = "Contact number is required.";
    isValid = false;
  }

  if (!amountDue.value || Number(amountDue.value) < 10000) {
    document.getElementById("amountDue-error").textContent = "Amount must be at least UGX 10,000.";
    isValid = false;
  }

  if (!salesAgent.value.trim()) {
    document.getElementById("salesAgent-error").textContent = "Sales agent name is required.";
    isValid = false;
  }

  if (!dueDate.value) {
    document.getElementById("dueDate-error").textContent = "Due date is required.";
    isValid = false;
  }

  if (!produceName.value.trim()) {
    document.getElementById("produceName-error").textContent = "Produce name is required.";
    isValid = false;
  }

  if (!produceType.value.trim()) {
    document.getElementById("produceType-error").textContent = "Produce type is required.";
    isValid = false;
  }

  if (!tonnage.value || Number(tonnage.value) <= 0) {
    document.getElementById("tonnage-error").textContent = "Tonnage must be greater than 0.";
    isValid = false;
  }

  if (!dispatchDate.value) {
    document.getElementById("dispatchDate-error").textContent = "Dispatch date is required.";
    isValid = false;
  }

  // Submit the form if valid
  if (isValid) {
    document.getElementById("buyerForm").submit();
  }
}
