console.log("JavaScript is working!");

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "admin" && password === "admin") {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    // Clear login form fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  } else {
    alert("Invalid credentials");
  }
});

document.getElementById("logout-btn").addEventListener("click", function () {
  console.log("Logout button clicked"); // Debugging log

  // Hide all sections except the login page
  const sections = document.querySelectorAll(".page");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  document.getElementById("login-page").style.display = "block";
  document.getElementById("dashboard").style.display = "none";
});

function showSection(sectionId) {
  console.log("Showing section:", sectionId); // Debugging log

  // Hide all sections
  const sections = document.querySelectorAll(".page");
  sections.forEach((section) => {
    if (section.id !== "login-page" && section.id !== "dashboard") {
      section.style.display = "none";
    }
  });

  // Show the selected section
  const sectionToShow = document.getElementById(sectionId);
  if (sectionToShow) {
    sectionToShow.style.display = "block";
  }
}

// Add functionality for each section placeholder

// Donation Reports
const donationData = [
  { date: "2023-01-01", donor: "John Doe", amount: "$100" },
  { date: "2023-02-15", donor: "Jane Smith", amount: "$200" },
  { date: "2023-03-20", donor: "Bill Johnson", amount: "$150" },
];

const donationReportsBody = document.getElementById("donation-reports-body");
donationData.forEach((donation) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${donation.date}</td><td>${donation.donor}</td><td>${donation.amount}</td>`;
  donationReportsBody.appendChild(row);
});

// Account Management
const accountData = [
  { username: "admin", email: "admin@example.com", role: "Administrator" },
  { username: "user1", email: "user1@example.com", role: "User" },
  { username: "user2", email: "user2@example.com", role: "User" },
];

const accountManagementBody = document.getElementById(
  "account-management-body"
);
accountData.forEach((account) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${account.username}</td><td>${account.email}</td><td>${account.role}</td>`;
  accountManagementBody.appendChild(row);
});

// Mentee Management
const menteeData = [
  { name: "Mentee A", guardian: "Guardian A", assigned: "Yes" },
  { name: "Mentee B", guardian: "Guardian B", assigned: "No" },
];

const menteeManagementBody = document.getElementById("mentee-management-body");
menteedata.forEach((mentee) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${mentee.name}</td><td>${mentee.guardian}</td><td>${mentee.assigned}</td>`;
  menteeManagementBody.appendChild(row);
});

// Donations Overview
const donationsOverviewData = [
  { date: "2023-04-01", donor: "Donor A", amount: "$50" },
  { date: "2023-05-15", donor: "Donor B", amount: "$75" },
];

const donationsOverviewBody = document.getElementById(
  "donations-overview-body"
);
donationsOverviewData.forEach((donation) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${donation.date}</td><td>${donation.donor}</td><td>${donation.amount}</td>`;
  donationsOverviewBody.appendChild(row);
});

// Content Management
document.getElementById("content-management").innerHTML +=
  "<p>Content management functionality will be added here.</p>";
