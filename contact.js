// Form Handling
const form = document.getElementById("feedbackForm");
const confirmation = document.getElementById("confirmation");
const feedbackList = document.getElementById("feedbackList");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const feedback = { name, email, message };

  // Save to localStorage
  let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  feedbacks.push(feedback);
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

  // Show confirmation
  confirmation.classList.remove("hidden");

  // Reset form
  form.reset();

  // Update feedback list
  displayFeedbacks();
});

// Display feedbacks
function displayFeedbacks() {
  feedbackList.innerHTML = "";
  const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

  feedbacks.forEach((fb, index) => {
    const li = document.createElement("li");
    li.textContent = `${fb.name} (${fb.email}): ${fb.message}`;
    feedbackList.appendChild(li);
  });
}

// Load feedbacks on page load
document.addEventListener("DOMContentLoaded", displayFeedbacks);

// FAQ Accordion
const acc = document.getElementsByClassName("accordion-btn");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
