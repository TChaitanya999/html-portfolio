let cartItems = []; // Array to store items in the cart
let totalPrice = 0; // Variable to keep track of the total price

// Function to add an item to the cart
function addToCart(productName, price) {
  // Add the item to the cartItems array
  cartItems.push({ name: productName, price: price });
  // Increment the total price
  totalPrice += price;
  // Update the shopping cart display
  updateCart();
}

// Function to update the shopping cart display
function updateCart() {
  // Get the <ul> element that will display the cart items
  const cartList = document.getElementById('cart-items');
  // Clear any existing content inside the <ul>
  cartList.innerHTML = '';
  // Loop through each item in the cartItems array
  cartItems.forEach(item => {
    // Create a new <li> element
    const li = document.createElement('li');
    // Set the text content of the <li> to display the item name and price
    li.textContent = `${item.name} - $${item.price}`;
    // Append the <li> to the <ul>
    cartList.appendChild(li);
  });
  // Update the total price displayed
  document.getElementById('total-price').textContent = totalPrice;
}
function searchProducts() {
    const searchTerm = document.getElementById('input').value.toLowerCase();
    const items = document.querySelectorAll('.items');
  
    items.forEach(item => {
      const itemName = item.querySelector('.name').textContent.toLowerCase();
      if (itemName.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }