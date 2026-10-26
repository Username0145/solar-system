const tub = document.getElementById("tub");
const drop = document.getElementById("drop");
let dropped = false;

drop.addEventListener("click", function () {
    dropped = !dropped;
    tub.classList.toggle("in-water", dropped);   // CSS handles the movement

    if (dropped) {
        drop.textContent = "Lift them out";
    } else {
        drop.textContent = "Drop them in the water";
    }
});