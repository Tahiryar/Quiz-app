const Questions = [
    {
        question: "Which one is the largest animal in the world?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Dog", correct: false },
            { text: "Elephant", correct: false }
        ]
    },
    {
        question: "What is the capital city of France?",
        answer: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "What element does 'O' represent on the periodic table?",
        answer: [
            { text: "Gold", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Osmium", correct: false },
            { text: "Opium", correct: false }
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answer: [
            { text: "1905", correct: false },
            { text: "1912", correct: true },
            { text: "1923", correct: false },
            { text: "1931", correct: false }
        ]
    },
    {
        question: "What is the smallest planet in our solar system?",
        answer: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Mercury", correct: true },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Which programming language is known for its snake logo?",
        answer: [
            { text: "Java", correct: false },
            { text: "Python", correct: true },
            { text: "C++", correct: false },
            { text: "JavaScript", correct: false }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answer: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Ernest Hemingway", correct: false },
            { text: "F. Scott Fitzgerald", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: [
            { text: "Saturn", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Earth", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "In what year did the Berlin Wall fall?",
        answer: [
            { text: "1987", correct: false },
            { text: "1989", correct: true },
            { text: "1991", correct: false },
            { text: "1993", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answer: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    }
];


const questionElement = document.getElementById("question");
const answerbtn = document.getElementById("answer-btn");
const nextbtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startquiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    ShowQuestion();   
}

function ShowQuestion() {
    resetState();

    let currentQuestion = Questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function selectAnswer(e) {
    const selectAnswer = e.target;
    const isCorrect = selectAnswer.dataset.correct === 'true';
    if (isCorrect) {
        selectAnswer.classList.add("correct");
        score++;
    } else {
        selectAnswer.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true; // Disable all buttons after answer is selected
    });
    nextbtn.style.display = 'block';
}

function resetState() {
    nextbtn.style.display = "none";
    while (answerbtn.firstChild) {
        answerbtn.removeChild(answerbtn.firstChild);
    }
}

nextbtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < Questions.length) {
        ShowQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    questionElement.innerHTML = `Quiz Over! Your score: ${score}/${Questions.length}`;
    nextbtn.style.display = 'none';
}

startquiz();
