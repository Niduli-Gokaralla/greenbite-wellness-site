const workoutData = {
  upper: {
    dumbbells: [
      "Dumbbell Bench Press — 3x10 reps",
      "Dumbbell Rows — 3x12 reps",
      "Shoulder Press — 3x10 reps",
      "Bicep Curls — 3x12 reps",
      "Lateral Raises — 3x12 reps"
    ],
    kettlebells: [
      "Kettlebell Swings — 3x15 reps",
      "Kettlebell Clean & Press — 3x10 reps",
      "Kettlebell Rows — 3x12 reps",
      "Kettlebell Floor Press — 3x10 reps",
      "Kettlebell Bicep Curls — 3x12 reps"
    ],
    bands: [
      "Band Chest Press — 3x12 reps",
      "Band Rows — 3x12 reps",
      "Band Shoulder Press — 3x10 reps",
      "Band Bicep Curls — 3x12 reps",
      "Band Lateral Raises — 3x12 reps"
    ],
    none: [
      "Push-ups — 3x15 reps",
      "Tricep Dips — 3x12 reps",
      "Plank Shoulder Taps — 3x20 reps",
      "Arm Circles — 3x30 seconds",
      "Inchworm Walkouts — 3x10 reps"
    ]
  },
  lower: {
    dumbbells: [
      "Goblet Squats — 3x12 reps",
      "Dumbbell Lunges — 3x12 per leg",
      "Romanian Deadlifts — 3x10 reps",
      "Step-Ups — 3x12 per leg",
      "Calf Raises — 3x15 reps"
    ],
    kettlebells: [
      "Kettlebell Deadlifts — 3x12 reps",
      "Kettlebell Lunges — 3x12 per leg",
      "Kettlebell Squats — 3x12 reps",
      "Kettlebell Step-Ups — 3x12 per leg",
      "Kettlebell Calf Raises — 3x15 reps"
    ],
    bands: [
      "Band Squats — 3x15 reps",
      "Band Glute Bridges — 3x12 reps",
      "Band Side Steps — 3x12 steps per side",
      "Band Lunges — 3x12 per leg",
      "Band Kickbacks — 3x15 reps"
    ],
    none: [
      "Bodyweight Squats — 3x15 reps",
      "Lunges — 3x12 per leg",
      "Glute Bridges — 3x12 reps",
      "Wall Sit — 3x30 seconds",
      "Calf Raises — 3x15 reps"
    ]
  },
  full: {
    dumbbells: [
      "Dumbbell Thrusters — 3x12 reps",
      "Renegade Rows — 3x10 reps",
      "Dumbbell Deadlifts — 3x12 reps",
      "Dumbbell Squats — 3x12 reps",
      "Overhead Press — 3x10 reps"
    ],
    kettlebells: [
      "Kettlebell Clean & Jerk — 3x10 reps",
      "Kettlebell Snatch — 3x10 reps per side",
      "Kettlebell Squat to Press — 3x12 reps",
      "Kettlebell Deadlifts — 3x12 reps",
      "Kettlebell Rows — 3x12 reps"
    ],
    bands: [
      "Band Squat to Press — 3x12 reps",
      "Band Deadlifts — 3x12 reps",
      "Band Rows — 3x12 reps",
      "Band Squats — 3x12 reps",
      "Band Push Press — 3x12 reps"
    ],
    none: [
      "Burpees — 3x12 reps",
      "Mountain Climbers — 3x20 reps",
      "Jump Squats — 3x12 reps",
      "Push-ups — 3x15 reps",
      "Plank — 3x30 seconds"
    ]
  }
};

let currentExercises = [];
let currentIndex = 0;
let countdown;
let duration = 30;

document.getElementById("workoutForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const bodyPart = document.getElementById("bodyPart").value;
  const equipment = document.getElementById("equipment").value;
  duration = parseInt(document.getElementById("duration").value) || 30;

  const workoutPlanEl = document.getElementById("workoutPlan");
  const controls = document.getElementById("timerControls");

  if (!bodyPart || !equipment) {
    workoutPlanEl.innerHTML = "<p>Please select both options.</p>";
    return;
  }

  currentExercises = workoutData[bodyPart][equipment];
  currentIndex = 0;

  workoutPlanEl.innerHTML = `
    <h2>Workout Plan:</h2>
    <ul>
      ${currentExercises.map(ex => `<li>${ex}</li>`).join("")}
    </ul>
    <p><strong>Rest:</strong> 60 seconds between sets</p>
  `;

  controls.style.display = "block";
  document.getElementById("exerciseName").textContent = currentExercises[0];
  document.getElementById("timerDisplay").textContent = duration;
});

function startTimer() {
  clearInterval(countdown);
  let timeLeft = duration;
  document.getElementById("timerDisplay").textContent = timeLeft;
  countdown = setInterval(() => {
    timeLeft--;
    document.getElementById("timerDisplay").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      nextExercise();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(countdown);
}

function nextExercise() {
  clearInterval(countdown);
  currentIndex++;
  if (currentIndex < currentExercises.length) {
    document.getElementById("exerciseName").textContent = currentExercises[currentIndex];
    document.getElementById("timerDisplay").textContent = duration;
  } else {
    document.getElementById("exerciseName").textContent = "Workout Complete!!!";
    document.getElementById("timerDisplay").textContent = "";
  }
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("nextBtn").addEventListener("click", nextExercise);
