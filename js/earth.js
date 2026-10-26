// Layers info guide button

// Text to display for each layer
const layerInfo = {
    "crust": "The crust is Earth's thin outer shell, where we live. It is only about 5 to 70 km thick.",
    "mantle": "The mantle is about 2,900 km thick and makes up most of Earth's volume. It is hot, slowly flowing rock.",
    "outer-core": "The outer core is a layer of liquid iron and nickel. Its movement creates Earth's magnetic field.",
    "inner-core": "The inner core is a solid ball of iron and nickel. It is roughly as hot as the surface of the Sun."
};

const buttons = document.querySelectorAll(".layer-btn");
const infoBox = document.getElementById("layer-info");

// Run this code every time a layer button is clicked
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        // Show the text for the clicked layer
        infoBox.textContent = layerInfo[button.dataset.layer];

        // Highlight only the selected button
        buttons.forEach(function (b) {
            b.classList.remove("selected");
        });
        button.classList.add("selected");
    });
});