// button to show/hide the animated solar system
const showBtn = document.getElementById("show-model");
const pauseBtn = document.getElementById("pause-btn");
const modelWrap = document.getElementById("model-wrap");
let animationRunning = true;

// First Button:  Show/hide solar system
showBtn.addEventListener("click", function() {
    modelWrap.classList.toggle("hidden");

    if (modelWrap.classList.contains("hidden")) {
        showBtn.textContent = "Show the solar system in motion";
    } else {
        showBtn.textContent = "Hide the solar system";
    }
});

// Second button: Stop/Start every orbit
pauseBtn.addEventListener("click", function() {
    const orbits = document.querySelectorAll(".orbit");

    for (let i = 0; i < orbits.length; i++) {
        orbits[i].classList.toggle("paused");
    }

    animationRunning = !animationRunning;
    if (animationRunning) {
        pauseBtn.textContent = "Stop Animation";
    } else {
        pauseBtn.textContent = "Start Animation";
    }
});