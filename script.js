// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Soft dark mode
const themeToggle = document.getElementById("themeToggle");

function setThemeLabel() {
  themeToggle.textContent = document.body.classList.contains("soft-dark")
    ? "Pastel Light"
    : "Soft Dark";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("soft-dark");

  if (document.body.classList.contains("soft-dark")) {
    localStorage.setItem("maheen-theme", "soft-dark");
  } else {
    localStorage.setItem("maheen-theme", "pastel-light");
  }

  setThemeLabel();
});

if (localStorage.getItem("maheen-theme") === "soft-dark") {
  document.body.classList.add("soft-dark");
}

setThemeLabel();

// Current year
document.getElementById("year").textContent = new Date().getFullYear();
