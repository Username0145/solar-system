// "how much would you weigh on the Moon?" calculator
const MOON_GRAVITY = 0.165;   // the Moon's gravity is 16.5% of Earth's

document.getElementById("calc").addEventListener("click", function () {
    const weight = Number(document.getElementById("weight").value);
    const result = document.getElementById("result");

    // An empty box becomes 0, so this also catches blank input
    if (weight <= 0) {
        result.textContent = "Please enter a weight above 0.";
        return;
    }

    const moonWeight = (weight * MOON_GRAVITY).toFixed(1);
    result.textContent = "On the Moon you would weigh " + moonWeight + " (same units). That is about one-sixth!";
});