
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

// Newsletter subscription
document.getElementById("newsletterForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const emailInput = document.getElementById("newsletterEmail");
  const email = emailInput.value.trim();
  const msg = document.getElementById("newsletterMsg");

  if (email) {
    let subscriptions = JSON.parse(localStorage.getItem("greenbiteSubscriptions")) || [];
    if (!subscriptions.includes(email)) {
      subscriptions.push(email);
      localStorage.setItem("greenbiteSubscriptions", JSON.stringify(subscriptions));
      msg.textContent = "Subscribed successfully!";
    } else {
      msg.textContent = " You are already subscribed!";
    }
    emailInput.value = "";
  } else {
    msg.textContent = "Please enter a valid email.";
  }
});
