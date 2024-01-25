const processPurchase = () => {
  // Get form inputs
  const selectedTicket = document.getElementById("ticketType").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const creditCard = document.getElementById("creditCard").value;

  // Validate form inputs
  if (isNaN(quantity) || quantity < 1) {
    alert("You must select a minimum of 1 ticket!");
    return;
  }

  // Check credit card length
  if (creditCard.length !== 6) {
    console.log(typeof creditCard.length);
    alert("Please enter a valid 6-digit credit card number!");
    return;
  }

  // Assume ticket prices (customize as needed)
  let pricePerTicket;
  if (selectedTicket === "vip") {
    pricePerTicket = 150;
  } else {
    pricePerTicket = 75;
  }

  // Calculate order summary
  const subtotal = pricePerTicket * quantity;
  const taxRate = 0.13;
  const tax = subtotal * taxRate;
  const finalPrice = subtotal + tax;

  // Update order summary section
  document.getElementById("numberOfTickets").innerText =
    "Number of tickets: " + quantity;
  document.getElementById("pricePerTicket").innerText =
    "Price per ticket: $" + pricePerTicket.toFixed(2);
  document.getElementById("subtotal").innerText =
    "Subtotal: $" + subtotal.toFixed(2);
  document.getElementById("tax").innerText = "Tax (13%): $" + tax.toFixed(2);
  document.getElementById("finalPrice").innerText =
    "Final Price: $" + finalPrice.toFixed(2);
  // Display order summary section
  document.getElementById("orderSummary").style.display = "block";
};
// Scroll down function
const scrolldown = () => {
  document.getElementById("orderSummary").scrollIntoView();
};

// Run Purchase process
document.querySelector("button").addEventListener("click", processPurchase);

// Scroll Down to Order Summary
document.querySelector("button").addEventListener("click", scrolldown);
