// Joelech
// JavaScript
// 9/10/2024
// Function to add a new panel display section
// Function to add a new panel display section
function add_Panel() {
    const panel_Display = document.getElementById('panel_Display'); // Target where new panels will be displayed

    const newPanelDiv = document.createElement('div'); // Create a new div for panel display

    // Get values from the input fields
    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const quantity = document.getElementById('quantity').value;
    const material = document.getElementById('material').value;
    const label = document.getElementById('label').value;

    // Populate the new panel with input values
    newPanelDiv.innerHTML = `
        <p><strong>Panel:</strong> Length: ${length} Width: ${width} Quantity: ${quantity} Material: ${material} Label: ${label}</p>
        <hr>
    `;

    panel_Display.appendChild(newPanelDiv); // Add new panel to the display section

    clearInputs(); // Clear input fields after adding the panel
}

// Function to clear input fields after adding a panel
function clearInputs() {
    document.getElementById('length').value = '';
    document.getElementById('width').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('material').value = '';
    document.getElementById('label').value = '';
}

// Function to calculate the total area of all panels
function calculate_Panel() {
    const panels = document.querySelectorAll('#panel_Display div');
    let totalArea = 0;

    panels.forEach(panel => {
        const length = parseFloat(panel.innerHTML.match(/Length: (\d+\.?\d*)/)[1]);
        const width = parseFloat(panel.innerHTML.match(/Width: (\d+\.?\d*)/)[1]);
        totalArea += length * width;
    });

    document.getElementById('area').innerText = `Total Area: ${totalArea.toFixed(2)} square units`;
}

// Function to add new stock inputs
function add_Stock() {
    const stock_Display = document.getElementById('panel_Stock'); // Target where new stock will be displayed

    const newStockDiv = document.createElement('div'); // Create a new div for stock display

    // Get values from the input fields
    const length = document.getElementById('stock_length').value;
    const width = document.getElementById('stock_width').value;
    const quantity = document.getElementById('stock_quantity').value;
    const material = document.getElementById('stock_material').value;
    const label = document.getElementById('stock_label').value;

    // Populate the new stock with input values
    newStockDiv.innerHTML = `
        <p><strong>Stock Sheet:</strong> Length: ${length} Width: ${width} Quantity: ${quantity} Material: ${material} Label: ${label}</p>
        <hr>
    `;

    stock_Display.appendChild(newStockDiv); // Add new stock to the display section

    clearStockInputs(); // Clear input fields after adding the stock
}

// Function to clear stock input fields after adding stock
function clearStockInputs() {
    document.getElementById('stock_length').value = '';
    document.getElementById('stock_width').value = '';
    document.getElementById('stock_quantity').value = '';
    document.getElementById('stock_material').value = '';
    document.getElementById('stock_label').value = '';
}

// Function to calculate the total area of all stock sheets
function calculate_Stock() {
    const stockSheets = document.querySelectorAll('#panel_Stock div');
    let totalStockArea = 0;

    stockSheets.forEach(stock => {
        const length = parseFloat(stock.innerHTML.match(/Length: (\d+\.?\d*)/)[1]);
        const width = parseFloat(stock.innerHTML.match(/Width: (\d+\.?\d*)/)[1]);
        totalStockArea += length * width;
    });

    document.getElementById('stock_area').innerText = `Total Stock Area: ${totalStockArea.toFixed(2)} square units`;
}

// Function to update settings (placeholder function for the future)
function updateSettings() {
    alert('Settings updated!');
}
// Function to calculate the remaining stock area
function calculateInformation() {
    // Get the total area of panels
    const totalArea = document.querySelector('#area').innerText.match(/Total Area: (\d+\.?\d*)/);
    const totalPanelArea = totalArea ? parseFloat(totalArea[1]) : 0;

    // Get the total area of stock sheets
    const totalStockArea = document.querySelector('#stock_area').innerText.match(/Total Stock Area: (\d+\.?\d*)/);
    const totalStock = totalStockArea ? parseFloat(totalStockArea[1]) : 0;

    // Subtract panel area from stock area
    const remainingArea = totalStock - totalPanelArea;

    // Display the remaining area
    document.getElementById('remaining_area').innerText = `Remaining Stock Area: ${remainingArea.toFixed(2)} square units`;

    // Prompt the user for an email address and send the result
    const userEmail = prompt("Enter your email to receive the calculated results:");

    // Send email to the user and default email
    sendEmail(userEmail, remainingArea);
}

// Function to simulate email sending
function sendEmail(userEmail, remainingArea) {
    // Create a formatted email body
    const emailBody = `
        Dear Customer,

        Thank you for using our quotation tool.

        Here is the result of your calculation:
        - Total remaining stock area after cutting: ${remainingArea.toFixed(2)} square units.

        We appreciate your business and look forward to serving you again.

        Best regards,
        Premier Glass Team
    `;

    // Simulate email sending action (you would replace this with an actual email API integration)
    alert(`Results sent to ${userEmail} and joemuiga02@gmail.com`);

    // Log the email content to the console
    console.log(`Email to: ${userEmail}`);
    console.log(`Email to: joemuiga02@gmail.com`);
    console.log(`Message: ${emailBody}`);
}
