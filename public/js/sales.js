function ValidityForm(event) {
  event.preventDefault(); // Prevent actual submission

  // Get values
  const produce = document.getElementById("produceName").value;
  const type = document.getElementById("Tproduce").value.trim();
  const date = document.getElementById("datePicker").value;
  const time = document.getElementById("timePicker").value;
  const quantity = document.getElementById("Qsold").value;
  const unitPrice = document.getElementById("Sprice").value;
  const total = document.getElementById("Tamount").value;
  const customer = document.getElementById("customerName").value.trim();
  const contact = document.getElementById("customerContact").value.trim();
  const seller = document.getElementsByName("seller")[0].value.trim();
  const branch = document.getElementsByName("branch")[0].value;
  const payment = document.getElementsByName("paymentMethod")[0].value;

  // Get error elements
  const errs = {
    produce: document.getElementById("produce-error"),
    type: document.getElementById("type-error"),
    date: document.getElementById("date-error"),
    time: document.getElementById("time-error"),
    quantity: document.getElementById("quantity-error"),
    unit: document.getElementById("unit-error"),
    total: document.getElementById("total-error"),
    customer: document.getElementById("customer-error"),
    contact: document.getElementById("contact-error"),
    seller: document.getElementById("seller-error"),
    branch: document.getElementById("branch-error"),
    payment: document.getElementById("payment-error"),
  };

  //This auto calculates the total amount:
  document.addEventListener("DOMContentLoaded", () => {
    const qty = document.getElementById("Qsold");
    const unit = document.getElementById("Sprice");
    const total = document.getElementById("Tamount");
  
    function calculateTotal() {
      const q = parseFloat(qty.value);
      const u = parseFloat(unit.value);
      if (!isNaN(q) && !isNaN(u)) {
        total.value = (q * u).toFixed(2);
      }
    }
  
    qty.addEventListener("input", calculateTotal);
    unit.addEventListener("input", calculateTotal);
  });

  // Clear previous errors
  for (let key in errs) errs[key].textContent = "";

  let isValid = true;

  if (!produce || produce === '') {
    errs.produce.textContent = "Please select produce.";
    isValid = false;
  }
  if (!type) {
    errs.type.textContent = "Please enter type of produce.";
    isValid = false;
  }
  if (!date) {
    errs.date.textContent = "Please select a date.";
    isValid = false;
  }
  if (!time) {
    errs.time.textContent = "Please select time of sale.";
    isValid = false;
  }
  if (!quantity || quantity <= 0) {
    errs.quantity.textContent = "Enter a valid quantity.";
    isValid = false;
  }
  if (!unitPrice || unitPrice <= 0) {
    errs.unit.textContent = "Enter a valid unit price.";
    isValid = false;
  }
  if (!total || total <= 0) {
    errs.total.textContent = "Enter total amount.";
    isValid = false;
  }
  if (!customer) {
    errs.customer.textContent = "Customer name.";
    isValid = false;
  }
  if (!contact || contact.length < 9) {
    errs.contact.textContent = "Invalid contact number.";
    isValid = false;
  }
  if (!seller) {
    errs.seller.textContent = "Enter seller name.";
    isValid = false;
  }
  if (!branch) {
    errs.branch.textContent = "Please choose a branch.";
    isValid = false;
  }
  if (!payment) {
    errs.payment.textContent = "Choose a payment method.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("myForm").submit();
  }
}
