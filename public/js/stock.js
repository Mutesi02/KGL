function ValidityForm(event) {
  event.preventDefault(); // Prevent actual form submission
  
  // Get values
  const produce = document.getElementById("Pname").value.trim();
  const type = document.getElementById("Tproduce").value.trim();
  const date = document.getElementById("datePicker").value;
  const time = document.getElementById("timePicker").value;
  const quantity = document.getElementById("Qsold").value;
  const unitPrice = document.getElementById("Sprice").value;
  const total = document.getElementById("Tamount").value;
  const supplier = document.getElementById("customerName").value.trim();
  const contact = document.getElementById("customerContact").value.trim();
  const branch = document.getElementById("branch").value;
  const payment = document.getElementById("paymentMethod").value;

  // Get error elements
  const errs = {
    produce: document.getElementById("produce-error"),
    type: document.getElementById("type-error"),
    date: document.getElementById("date-error"),
    time: document.getElementById("time-error"),
    quantity: document.getElementById("quantity-error"),
    unit: document.getElementById("unit-error"),
    total: document.getElementById("total-error"),
    supplier: document.getElementById("supplier-error"),
    contact: document.getElementById("contact-error"),
    branch: document.getElementById("branch-error"),
    payment: document.getElementById("payment-error"),
  };

  // Clear previous errors
  for (let key in errs) errs[key].textContent = "";

  let isValid = true;

  // Validation checks
  if (!produce) {
    errs.produce.textContent = "Produce name is required.";
    isValid = false;
  }
  if (!type) {
    errs.type.textContent = "Type of produce is required.";
    isValid = false;
  }
  if (!date) {
    errs.date.textContent = "Date of product input is required.";
    isValid = false;
  }
  if (!time) {
    errs.time.textContent = "Time of product input is required.";
    isValid = false;
  }
  if (!quantity || quantity <= 0) {
    errs.quantity.textContent = "Quantity must be greater than 0.";
    isValid = false;
  }
  if (!unitPrice || unitPrice <= 0) {
    errs.unit.textContent = "Unit price must be greater than 0.";
    isValid = false;
  }
  if (!total || total <= 0) {
    errs.total.textContent = "Total amount must be greater than 0.";
    isValid = false;
  }
  if (!supplier) {
    errs.supplier.textContent = "Supplier name is required.";
    isValid = false;
  }
  if (!contact || contact.length < 9) {
    errs.contact.textContent = "Invalid contact number.";
    isValid = false;
  }
  if (!branch) {
    errs.branch.textContent = "Please select a branch.";
    isValid = false;
  }
  if (!payment) {
    errs.payment.textContent = "Please choose a payment method.";
    isValid = false;
  }

  // If valid, submit the form
  if (isValid) {
    console.log('Form is valid, submitting...');
    document.getElementById("myForm").submit(); // Manually submit the form
  } else {
    console.log('Form is invalid, not submitting.');
  }
}
