// "Read More" show/hide sections
const buttons = document.querySelectorAll(".read-btn");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        // data-target holds the id of the paragraph this button controls
        const text = document.getElementById(button.dataset.target);
        text.classList.toggle("hidden");
    });
});