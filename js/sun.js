// When pressed, cool facts will show up
const modal = document.getElementById("modal");

document.getElementById("open-modal").addEventListener("click", function () {
    modal.classList.add("open");
});

document.getElementById("close-modal").addEventListener("click", function () {
    modal.classList.remove("open");
});

// Clicking the dark background also closes the modal
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.classList.remove("open");
    }
});