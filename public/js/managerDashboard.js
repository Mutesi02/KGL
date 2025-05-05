// Sample data - in real application, you would fetch this from a backend or database
// const procurements = [
//     { produce: 'Maize', type: 'Grain', tonnage: 3000, cost: 2000000, dealer: 'Sseka', branch: 'Maganjo', date: '2025-02-09' },
//     { produce: 'Beans', type: 'Grain', tonnage: 2000, cost: 150000, dealer: 'Kigere', branch: 'Matugga', date: '2025-02-06' },
//     { produce: 'Soya', type: 'Grain', tonnage: 1000, cost: 350000, dealer: 'Mwebe', branch: 'Matugga', date: '2025-02-13' }
//   ];
  
//   const sales = [
//     { produce: 'Soybeans', tonnage: 2000, amountPaid: 1000000, buyer: 'Sarah', agent: 'Alex', branch: 'Matugga', date: '2025-02-10' },
//     { produce: 'Cow Peas', tonnage: 3000, amountPaid: 2000000, buyer: 'Kanyana', agent: 'James', branch: 'Maganjo', date: '2025-02-14' }
//   ];
  
  // Function to calculate and update dashboard numbers
  function updateDashboard() {
    const totalProcurement = procurements.reduce((total, item) => total + item.tonnage, 0);
    const totalSales = sales.reduce((total, item) => total + item.tonnage, 0);
  
    document.querySelector('.card.bg-primary p').textContent = totalProcurement + " kg";
    document.querySelector('.card.bg-success p').textContent = totalSales + " kg";
  
    const lowStock = totalProcurement - totalSales <= 5000 ? 1 : 0;
    const outOfStock = totalProcurement - totalSales <= 0 ? 1 : 0;
  
    document.querySelector('.card.bg-warning p').textContent = lowStock;
    document.querySelector('.card.bg-danger p').textContent = outOfStock;
  }
  
  // Function to populate the recent procurements table
  function populateProcurements() {
    const tbody = document.querySelectorAll('table')[0].querySelector('tbody');
    tbody.innerHTML = ""; // Clear existing rows
  
    procurements.forEach((item, index) => {
      const row = `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${item.produce}</td>
          <td>${item.type}</td>
          <td>${item.tonnage}</td>
          <td>${item.cost.toLocaleString()}</td>
          <td>${item.dealer}</td>
          <td>${item.branch}</td>
          <td>${item.date}</td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  }
  
  // Function to populate the recent sales table
  function populateSales() {
    const tbody = document.querySelectorAll('table')[1].querySelector('tbody');
    tbody.innerHTML = ""; // Clear existing rows
  
    sales.forEach((item, index) => {
      const row = `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${item.produce}</td>
          <td>${item.tonnage}</td>
          <td>${item.amountPaid.toLocaleString()}</td>
          <td>${item.buyer}</td>
          <td>${item.agent}</td>
          <td>${item.branch}</td>
          <td>${item.date}</td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  }
  
  // Run these functions when page loads
  window.onload = function() {
    updateDashboard();
    populateProcurements();
    populateSales();
  };
  