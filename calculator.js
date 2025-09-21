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
