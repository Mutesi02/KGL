function showForm(type) {
    const formSection = document.getElementById('form-section');
    const tableSection = document.getElementById('table-section');
    formSection.classList.remove('hidden');
    tableSection.classList.add('hidden');

    if (type === 'cash') {
        formSection.innerHTML = `
            <h2>Record Cash Sale</h2>
            <form action="/recordCashSale" method="POST">
                <input type="text" name="produceName" placeholder="Produce Name" required>
                <input type="text" name="produceType" placeholder="Produce Type" required>
                <input type="number" name="quantitySold" placeholder="Tonnage (kg)" required>
                <input type="number" name="salePricePerKg" placeholder="Price per kg" required>
                <input type="text" name="buyerName" placeholder="Buyer Name" required>
                <input type="text" name="buyerContact" placeholder="Contact" required>
                <input type="text" name="branch" placeholder="Branch" required>
                <button type="submit">Submit Sale</button>
            </form>
        `;
    } else if (type === 'credit') {
        formSection.innerHTML = `
            <h2>Record Credit Sale</h2>
            <form action="/recordCreditSale" method="POST">
                <input type="text" name="buyerName" placeholder="Buyer Name" required>
                <input type="text" name="buyerContact" placeholder="Contact" required>
                <input type="text" name="produceName" placeholder="Produce Name" required>
                <input type="text" name="produceType" placeholder="Type of Produce" required>
                <input type="number" name="quantitySold" placeholder="Tonnage (kg)" required>
                <input type="number" name="salePricePerKg" placeholder="Price per kg" required>
                <input type="text" name="branch" placeholder="Branch" required>
                <input type="date" name="dueDate" placeholder="Due Date" required>
                <button type="submit">Submit Credit Sale</button>
            </form>
        `;
    }
}

function showStock() {
    const formSection = document.getElementById('form-section');
    const tableSection = document.getElementById('table-section');
    formSection.classList.add('hidden');
    tableSection.classList.remove('hidden');

    fetch('/stockdata')
        .then(response => response.json())
        .then(stockData => {
            let stockHTML = `
                <h2>Available Stock</h2>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Produce</th>
                            <th>Type</th>
                            <th>Tonnage Available (kg)</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            stockData.forEach(item => {
                stockHTML += `
                    <tr>
                        <td>${item.produceName}</td>
                        <td>${item.produceType}</td>
                        <td>${item.tonnageAvailable}</td>
                    </tr>
                `;
            });

            stockHTML += `</tbody></table>`;
            tableSection.innerHTML = stockHTML;
        })
        .catch(error => {
            console.error('Error fetching stock data:', error);
        });
}

function showHistory() {
    document.getElementById('form-section').classList.add('hidden');
    document.getElementById('table-section').classList.remove('hidden');
    document.getElementById('table-section').scrollIntoView({ behavior: 'smooth' });
}
