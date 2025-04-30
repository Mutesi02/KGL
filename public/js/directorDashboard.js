// Sample Data - You can later fetch from Node.js backend
const dashboardData = {
    totalRevenue: 350000000,
    totalTons: 530,
    outstandingCredit: 45000000,
    totalTransactions: 1250,
    produceSales: {
        "Maize": 250,
        "Beans": 150,
        "G-nuts": 50,
        "Soybeans": 40,
        "Cowpeas": 40
    },
    branchPerformance: [
        { branch: "Maganjo", revenue: 200000000, tons: 320 },
        { branch: "Matugga", revenue: 150000000, tons: 210 }
    ]
};

// Populate Summary Cards
document.getElementById('totalRevenue').innerText = `UGX ${dashboardData.totalRevenue.toLocaleString()}`;
document.getElementById('totalTons').innerText = `${dashboardData.totalTons} Tons`;
document.getElementById('outstandingCredit').innerText = `UGX ${dashboardData.outstandingCredit.toLocaleString()}`;
document.getElementById('totalTransactions').innerText = dashboardData.totalTransactions;

// Populate Branch Performance Table
const tableBody = document.getElementById('branchTableBody');
dashboardData.branchPerformance.forEach(branch => {
    const row = `<tr>
        <td>${branch.branch}</td>
        <td>UGX ${branch.revenue.toLocaleString()}</td>
        <td>${branch.tons} Tons</td>
    </tr>`;
    tableBody.innerHTML += row;
});

// Render Chart
const ctx = document.getElementById('produceChart').getContext('2d');
const produceChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: Object.keys(dashboardData.produceSales),
        datasets: [{
            label: 'Tons Sold',
            data: Object.values(dashboardData.produceSales),
            backgroundColor: [
                '#4caf50', '#2196f3', '#ff9800', '#9c27b0', '#f44336'
            ]
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
