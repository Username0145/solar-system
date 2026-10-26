// A slider that tilts the planet from 0° to 98°
const slider = document.getElementById("tilt");
const box = document.getElementById("tilt-box");
const text = document.getElementById("tilt-text");

slider.addEventListener("input", function () {
    const degrees = Number(slider.value);
    box.style.transform = "rotate(" + degrees + "deg)";

    text.textContent = "Tilt: " + degrees + "°";
    if (degrees === 98) {
        text.textContent += " (this is how Uranus really spins: on its side!)";
    }
});