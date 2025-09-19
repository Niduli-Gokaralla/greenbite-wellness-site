// Auto-rotating slogans
const slogans = [
  "Healthy choices, happier tomorrow...",
  "Wellness starts with a single bite...",
  "Fuel your body, feed your mind..."
];

let index = 0;
const sloganElement = document.getElementById("slogan");

function showSlogan() {
  sloganElement.style.opacity = 0; // fade out
  setTimeout(() => {
    sloganElement.textContent = slogans[index];
    sloganElement.style.animation = "fadeIn 1s ease-in-out";
    sloganElement.style.opacity = 1; // fade in
    index = (index + 1) % slogans.length;
  }, 500);
}

showSlogan();
setInterval(showSlogan, 4000);

// Tips data (with Boxicons instead of images)
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

// Display tips in grid
const tipGrid = document.getElementById("tipGrid");
tips.forEach((tip) => {
  const card = document.createElement("div");
  card.classList.add("tip-card");

  if (tip.icon) {
    const icon = document.createElement("i");
    icon.className = `bx ${tip.icon} bx-burst`; // bx-burst / bx-breathe for animation
    card.appendChild(icon);
  }

  const text = document.createElement("p");
  text.textContent = tip.text;
  card.appendChild(text);

  tipGrid.appendChild(card);
});
// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

// Close menu when link is clicked
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
  });
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
      msg.textContent = "✅ Subscribed successfully!";
    } else {
      msg.textContent = "⚠️ You are already subscribed!";
    }
    emailInput.value = "";
  } else {
    msg.textContent = "Please enter a valid email.";
  }
});


 //Calculator 
function calculate() {
    // Get values from form
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const activity = parseFloat(document.getElementById("activity").value);

    if (!age || !height || !weight) {
        alert("Please fill in all fields.");
        return;
    }

    // Calculate BMR
    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Calculate TDEE
    const tdee = bmr * activity;

    // Macronutrients
    const carbs = (tdee * 0.50) / 4;
    const protein = (tdee * 0.20) / 4;
    const fat = (tdee * 0.30) / 9;

    // Update results
    document.getElementById("bmr-result").innerText = bmr.toFixed(2) + " kcal";
    document.getElementById("tdee-result").innerText = tdee.toFixed(2) + " kcal";
    document.getElementById("carbs-result").innerText = carbs.toFixed(1) + " g";
    document.getElementById("protein-result").innerText = protein.toFixed(1) + " g";
    document.getElementById("fat-result").innerText = fat.toFixed(1) + " g";

    // Animate progress bars
    document.getElementById("carbs-bar").style.width = "50%";
    document.getElementById("protein-bar").style.width = "20%";
    document.getElementById("fat-bar").style.width = "30%";
}

