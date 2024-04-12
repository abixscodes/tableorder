// Function to add dish to order and send it to CRUD-CRUD
function addToOrder(dishName, price, quantity) {
    // Create order item
    const orderItem = {
      dishName: dishName,
      price: price,
      quantity: quantity
    };
  
    // Make POST request to CRUD-CRUD to add order item
    axios.post('https://crudcrud.com/api/4e58d57b2bc64c69afc48605b6805d4b/orders', orderItem)
      .then(response => {
        // Handle success response if needed
      })
      .catch(error => {
        console.error('Error adding order item:', error);
      });
  
    // Create order item element and append to order list
    const orderItemElement = document.createElement('li');
    orderItemElement.innerHTML = `${dishName} - $${price} - Quantity: ${quantity}`;
    const orderList = document.getElementById('order-list');
    orderList.appendChild(orderItemElement);
  }
  
  // Function to add bill and send it to CRUD-CRUD
  function addBill(tableNumber, totalAmount) {
    // Create bill object
    const bill = {
      tableNumber: tableNumber,
      totalAmount: totalAmount
    };
  
    // Make POST request to CRUD-CRUD to add bill
    axios.post('https://crudcrud.com/api/4e58d57b2bc64c69afc48605b6805d4b/bills', bill)
      .then(response => {
        // Handle success response if needed
      })
      .catch(error => {
        console.error('Error adding bill:', error);
      });
  
    // Create bill element and append to bill list
    const billElement = document.createElement('li');
    billElement.innerHTML = `Table ${tableNumber} - Total: $${totalAmount}`;
    const billList = document.getElementById('bill-list');
    billList.appendChild(billElement);
  }
  
  // Event listeners for buttons and user interactions
  document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for selecting tables, adding dishes to orders, etc.
    const addToOrderBtns = document.querySelectorAll('.add-to-order-btn');
    addToOrderBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const dishName = this.dataset.dish;
        const price = this.dataset.price;
        const quantity = this.previousElementSibling.value;
        addToOrder(dishName, price, quantity);
      });
    });
  
    const addBillBtn = document.getElementById('add-bill-btn');
    addBillBtn.addEventListener('click', function() {
      const tableNumber = document.getElementById('table-number').value;
      const totalAmount = document.getElementById('bill-total').value;
      addBill(tableNumber, totalAmount);
    });
  });
  