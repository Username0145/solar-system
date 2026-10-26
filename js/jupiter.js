// Short quiz that consists of three Questions
const questions = [
    { q: "Which planet is the largest in the solar system?", a: ["Saturn", "Jupiter", "Neptune"], correct: 1 },
    { q: "What is the Great Red Spot?", a: ["A volcano", "A giant storm", "A crater"], correct: 1 },
    { q: "About how long is a day on Jupiter?", a: ["10 hours", "24 hours", "10 days"], correct: 0 }
];

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
let current = 0;
let score = 0;

// Shows the current question and one button per answer
function showQuestion() {
    answers.innerHTML = "";

    if (current >= questions.length) {
        question.textContent = "Quiz finished!";
        feedback.textContent = "You scored " + score + " out of " + questions.length + ".";
        return;
    }

    const item = questions[current];
    question.textContent = item.q;

    item.a.forEach(function (text, index) {
        const button = document.createElement("button");
        button.className = "btn";
        button.textContent = text;

        button.addEventListener("click", function () {
            if (index === item.correct) {
                score++;
                feedback.textContent = "Correct!";
            } else {
                feedback.textContent = "Not quite. The answer is " + item.a[item.correct] + ".";
            }
            current++;
            answers.innerHTML = "";                 // stop double-clicks
            setTimeout(showQuestion, 1200);         // next question after 1.2 seconds
        });

        answers.appendChild(button);
    });
}

showQuestion();