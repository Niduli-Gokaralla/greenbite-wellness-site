// Timer
let timer;
let timeLeft = 25 * 60; // 25 minutes
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(timer);
      addSession();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 25 * 60;
  updateTimer();
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

// Ambient Sounds
const sounds = {
  rain: new Audio("Audio/rain.mp3"),
  forest: new Audio("Audio/forest.mp3"),
};

document.querySelectorAll(".sounds button").forEach(button => {
  button.addEventListener("click", () => {
    const soundType = button.dataset.sound;
    const sound = sounds[soundType];
    if (sound.paused) {
      sound.loop = true;
      sound.play();
    } else {
      sound.pause();
    }
  });
});
// Track Sessions with localStorage
let completed = localStorage.getItem("sessions") || 0;
const sessionsDisplay = document.getElementById("sessions");
sessionsDisplay.textContent = `Completed Sessions: ${completed}`;

function addSession() {
  completed++;
  localStorage.setItem("sessions", completed);
  sessionsDisplay.textContent = `Completed Sessions: ${completed}`;
  alert("Session Complete ");
}

// Initialize timer
updateTimer();