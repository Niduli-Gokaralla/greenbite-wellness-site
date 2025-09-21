// Auto-rotating slogans
const slogans = [
  "Healthy choices, happier tomorrow...",
  "Wellness starts with a single bite...",
  "Fuel your body, feed your mind..."
];

let index = 0;
const sloganElement = document.getElementById("slogan");

function showSlogan() {
  sloganElement.style.opacity = 0;
  setTimeout(() => {
    sloganElement.textContent = slogans[index];
    sloganElement.style.opacity = 1;
    index = (index + 1) % slogans.length;
  }, 500);
}

showSlogan();
setInterval(showSlogan, 4000);

// Tips grid
const tips = [
  { text: "Stay hydrated! Drink at least 8 glasses of water daily.", icon: "bxs-droplet" },
  { text: "Take a short walk after meals to aid digestion.", icon: "bx-walk" },
  { text: "Start your day with a healthy breakfast full of fiber and protein.", icon: "bxs-bowl-hot" },
  { text: "Practice mindfulness for at least 10 minutes today.", icon: "bxs-brain" },
  { text: "Include more leafy greens in your meals.", icon: "bxs-leaf" },
  { text: "Get at least 7-8 hours of sleep for better recovery.", icon: "bxs-moon" },
  { text: "Stretch your body to relieve stress and tension.", icon: "bx-dumbbell" },
  { text: "Limit processed sugar for sustained energy levels.", icon: "bx-cookie" }
];

const tipGrid = document.getElementById("tipGrid");
tips.forEach((tip) => {
  const card = document.createElement("div");
  card.classList.add("tip-card", "reveal");

  if (tip.icon) {
    const icon = document.createElement("i");
    icon.className = `bx ${tip.icon} bx-burst`;
    card.appendChild(icon);
  }

  const text = document.createElement("p");
  text.textContent = tip.text;
  card.appendChild(text);

  tipGrid.appendChild(card);
});

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

// Reveal on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

 
