function showForm(type) {
    const formSection = document.getElementById('form-section');
    const tableSection = document.getElementById('table-section');
    formSection.classList.remove('hidden');
    tableSection.classList.add('hidden');

    if (type === 'cash') {
        formSection.innerHTML = `
            <h2>Record Cash Sale</h2>
            <form onsubmit="submitCashSale(event)">
                <input type="text" placeholder="Produce Name" required>
                <input type="number" placeholder="Tonnage (kg)" required>
                <input type="number" placeholder="Amount Paid (UGX)" required>
                <input type="text" placeholder="Buyer Name" required>
                <button type="submit">Submit Sale</button>
            </form>
        `;
    } else if (type === 'credit') {
        formSection.innerHTML = `
            <h2>Record Credit Sale</h2>
            <form onsubmit="submitCreditSale(event)">
                <input type="text" placeholder="Buyer Name" required>
                <input type="text" placeholder="National ID (NIN)" required>
                <input type="text" placeholder="Location" required>
                <input type="text" placeholder="Phone Number" required>
                <input type="number" placeholder="Amount Due (UGX)" required>
                <input type="text" placeholder="Produce Name" required>
                <input type="text" placeholder="Type of Produce" required>
                <input type="number" placeholder="Tonnage (kg)" required>
                <input type="date" placeholder="Due Date" required>
                <button type="submit">Submit Credit Sale</button>
            </form>
        `;
    }
}

function submitCashSale(event) {
    event.preventDefault();
    alert('Cash Sale Recorded Successfully!');
    document.getElementById('form-section').classList.add('hidden');
}

function submitCreditSale(event) {
    event.preventDefault();
    alert('Credit Sale Recorded Successfully!');
    document.getElementById('form-section').classList.add('hidden');
}

function showStock() {
    const formSection = document.getElementById('form-section');
    const tableSection = document.getElementById('table-section');
    formSection.classList.add('hidden');
    tableSection.classList.remove('hidden');

    tableSection.innerHTML = `
        <h2>Available Stock</h2>
        <table>
            <thead>
                <tr>
                    <th>Produce</th>
                    <th>Type</th>
                    <th>Tonnage Available (kg)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Maize</td><td>Grain</td><td>12000</td></tr>
                <tr><td>Beans</td><td>Dry</td><td>8000</td></tr>
                <tr><td>G-nuts</td><td>Red</td><td>5000</td></tr>
                <tr><td>Soybeans</td><td>White</td><td>4000</td></tr>
                <tr><td>Cowpeas</td><td>Black-eyed</td><td>3000</td></tr>
            </tbody>
        </table>
    `;
}

function showHistory() {
    const formSection = document.getElementById('form-section');
    const tableSection = document.getElementById('table-section');
    formSection.classList.add('hidden');
    tableSection.classList.remove('hidden');

    tableSection.innerHTML = `
        <h2>My Sales History</h2>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Produce</th>
                    <th>Buyer</th>
                    <th>Amount (UGX)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>2025-04-25</td><td>Beans</td><td>John Doe</td><td>2,500,000</td></tr>
                <tr><td>2025-04-26</td><td>Maize</td><td>Jane Smith</td><td>3,200,000</td></tr>
            </tbody>
        </table>
    `;
}
