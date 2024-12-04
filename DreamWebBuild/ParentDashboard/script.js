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
  navigateTo("dashboard");
}

// Login button click event
document.getElementById("login-button").addEventListener("click", function () {
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
  if (username === "parent" && password === "password") {
    console.log("Login successful"); // Debug log

    sessionStorage.setItem("loggedIn", "true");
    navigateTo("dashboard");

    // Display child/mentee information
    document.getElementById(
      "child-info"
    ).innerHTML = `<p>Child/Mentee: John Doe</p>`;

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

// Add donation button click event
document
  .getElementById("add-donation-btn")
  .addEventListener("click", function () {
    document.getElementById("child-name").value = "John Doe"; // Pre-populate with child's name
    navigateTo("donation-page");
  });

// Donation form submission event
document
  .getElementById("donation-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Donation form submitted"); // Debug log

    const donationAmount = document.getElementById("donation-amount").value;
    const paymentMethod = document.getElementById("payment-method").value;
    console.log(
      `Donation Amount: ${donationAmount}, Payment Method: ${paymentMethod}`
    ); // Debug log

    // Temporary donation submission logic for demonstration purposes
    alert("Donation submitted successfully.");
    navigateTo("thank-you-page");

    // Clear donation form fields
    document.getElementById("donation-amount").value = "";
    document.getElementById("payment-method").value = "";
  });

// Back to dashboard button click event
document
  .getElementById("back-to-dashboard-btn")
  .addEventListener("click", function () {
    navigateTo("dashboard");
  });

// Logout button click event
document.getElementById("logout-btn").addEventListener("click", function () {
  console.log("Logout button clicked"); // Debug log
  sessionStorage.removeItem("loggedIn");
  navigateTo("home-page");
});
