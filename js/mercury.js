// toggle between the day side and the night side
const surface = document.getElementById("surface");
const temp = document.getElementById("temp");
const toggle = document.getElementById("toggle");
let isDay = true;

toggle.addEventListener("click", function () {
    isDay = !isDay;   // flip between true and false

    if (isDay) {
        surface.className = "surface day";
        temp.textContent = "Day side: 470°C (870°F)";
        toggle.textContent = "Switch to night side";
    } else {
        surface.className = "surface night";
        temp.textContent = "Night side: -184°C (-300°F)";
        toggle.textContent = "Switch to day side";
    }
});