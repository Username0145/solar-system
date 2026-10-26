// choose an item and see what happens at 465°C
const outcomes = {
    water: "Water boils at 100°C, so it would turn to steam instantly.",
    lead: "Lead melts at 327°C, so it would become a shiny puddle.",
    chocolate: "Chocolate melts at about 34°C, so it would be a puddle in a blink.",
    paper: "Paper chars at around 230°C. It would turn black, though with almost no oxygen it would not catch fire."
};

document.getElementById("item").addEventListener("change", function (event) {
    const choice = event.target.value;
    const outcome = document.getElementById("outcome");

    if (choice === "") {
        outcome.textContent = "";
    } else {
        outcome.textContent = outcomes[choice];
    }
});