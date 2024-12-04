// Function to navigate between pages
function navigateTo(pageId) {
  console.log(`Navigating to ${pageId}`); // Debug log
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.add("hidden");
    page.classList.remove("active");
  });
  document.getElementById(pageId).classList.remove("hidden");
  document.getElementById(pageId).classList.add("active");
}

// Check if user is already logged in
if (sessionStorage.getItem("loggedIn") === "true") {
  navigateTo("donation-options-page");
}

// Home page donate button click event
document.getElementById("donate-button").addEventListener("click", function () {
  navigateTo("donation-options-page");
});

// Donation options buttons click events
document
  .getElementById("donate-mentee-button")
  .addEventListener("click", function () {
    // Logic to select a specific mentee
    document.getElementById("mentee-name").value = "John Doe"; // Example mentee name
    navigateTo("login-page");
  });

document
  .getElementById("donate-multiple-mentees-button")
  .addEventListener("click", function () {
    // Logic to select multiple mentees
    document.getElementById("mentee-name").value = "Multiple Mentees"; // Example
    navigateTo("login-page");
  });

document
  .getElementById("donate-general-fund-button")
  .addEventListener("click", function () {
    document.getElementById("mentee-name").value = "General Fund"; // Example
    navigateTo("login-page");
  });

// Login form submission event
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Login form submitted"); // Debug log

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(`Username: ${username}, Password: ${password}`); // Debug log

  // Temporary user validation for demonstration purposes
  if (username === "donor" && password === "password") {
    console.log("Login successful"); // Debug log

    sessionStorage.setItem("loggedIn", "true");
    navigateTo("donation-form-page");

    // Clear login form fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  } else {
    console.log("Invalid credentials"); // Debug log
    alert("Invalid credentials. Please try again.");
  }
});

// Registration form submission event
document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Registration form submitted"); // Debug log

    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    console.log(`New Username: ${newUsername}, New Password: ${newPassword}`); // Debug log

    // Temporary registration logic for demonstration purposes
    alert("Registration successful. Please log in.");
    navigateTo("login-page");

    // Clear registration form fields
    document.getElementById("new-username").value = "";
    document.getElementById("new-password").value = "";
  });

// Donation form submission event
document
  .getElementById("donation-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Donation form submitted"); // Debug log

    const donationAmount = document.getElementById("donation-amount").value;
    const paymentMethod = document.getElementById("payment-method").value;
    const donationType = document.getElementById("donation-type").value;
    const menteeName = document.getElementById("mentee-name").value;
    console.log(
      `Donation Amount: ${donationAmount}, Payment Method: ${paymentMethod}, Donation Type: ${donationType}, Mentee Name: ${menteeName}`
    ); // Debug log

    // Temporary donation submission logic for demonstration purposes
    alert("Donation submitted successfully.");
    navigateTo("thank-you-page");

    // Clear donation form fields
    document.getElementById("donation-amount").value = "";
    document.getElementById("payment-method").value = "";
    document.getElementById("donation-type").value = "";
  });

// Back to home button click event
document
  .getElementById("back-to-home-btn")
  .addEventListener("click", function () {
    navigateTo("home-page");
  });
