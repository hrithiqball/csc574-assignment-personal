const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.addEventListener("click", function () {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", false);
});

const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning,";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon,";
} else {
  greeting.textContent = "Good evening,";
}

const copyButton = document.getElementById("copyEmail");
const copyStatus = document.getElementById("copyStatus");

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText("hrithiqball@gmail.com").then(function () {
    copyStatus.textContent = "Email copied!";
    setTimeout(function () {
      copyStatus.textContent = "";
    }, 2000);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
