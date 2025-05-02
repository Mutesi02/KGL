function validateProcurementForm(event) {
    event.preventDefault();
  
    const form = document.getElementById("procurementForm");
    const produce = document.getElementById("Pname").value.trim();
    const type = document.getElementById("Tproduce").value.trim();
    const date = document.getElementById("datePicker").value;
    const time = document.getElementById("timePicker").value;
    const tonnage = document.getElementById("tonnage").value.trim();
    const cost = document.getElementById("cost").value.trim();
    const dealer = document.getElementById("dealerName").value.trim();
    const contact = document.getElementById("dealerContact").value.trim();
    const branch = document.getElementById("branchSelect").value;
    const psold = document.getElementById("Psold").value.trim();
  
    const errors = {
      produce: document.getElementById("error-produce"),
      type: document.getElementById("error-type"),
      date: document.getElementById("error-date"),
      time: document.getElementById("error-time"),
      tonnage: document.getElementById("error-tonnage"),
      cost: document.getElementById("error-cost"),
      dealer: document.getElementById("error-dealer"),
      contact: document.getElementById("error-contact"),
      branch: document.getElementById("error-branch"),
      psold: document.getElementById("error-psold"),
    };
  
    // Clear old errors
    for (let key in errors) {
      errors[key].textContent = "";
    }
  
    let isValid = true;
  
    if (!produce) {
      errors.produce.textContent = "Please enter produce name.";
      isValid = false;
    }
  
    if (!type) {
      errors.type.textContent = "Please enter type of produce.";
      isValid = false;
    }
  
    if (!date) {
      errors.date.textContent = "Please select a date.";
      isValid = false;
    }
  
    if (!time) {
      errors.time.textContent = "Please select a time.";
      isValid = false;
    }
  
    if (!tonnage || isNaN(tonnage) || Number(tonnage) <= 0) {
      errors.tonnage.textContent = "Enter a valid tonnage.";
      isValid = false;
    }
  
    if (!cost || isNaN(cost) || Number(cost) <= 0) {
      errors.cost.textContent = "Enter a valid cost.";
      isValid = false;
    }
  
    if (!dealer) {
      errors.dealer.textContent = "Dealer name required.";
      isValid = false;
    }
  
    if (!contact || contact.length < 9) {
      errors.contact.textContent = "Invalid contact number.";
      isValid = false;
    }
  
    if (!branch || branch === "Choose...") {
      errors.branch.textContent = "Please select a branch.";
      isValid = false;
    }
  
    if (!psold || isNaN(psold) || Number(psold) <= 0) {
      errors.psold.textContent = "Enter a valid sale price.";
      isValid = false;
    }
  
    if (isValid) {
      alert("Procurement recorded successfully!");
      form.submit();
    }
  }
  