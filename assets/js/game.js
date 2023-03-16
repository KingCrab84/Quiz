//window.localStorage.removeItem('highScores');
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;
let score = 0;
let questionCounter = 0;
let acceptingAnswers = false;
let currentQuestion = {};
let availableQuestions = [];

fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
    .then(res => res.json())
    .then(loadedQuestions => {
        questions = loadedQuestions.results.map(loadedQuestions => {
            const formattedQuestion = {
                question: loadedQuestions.question
            };
           
            const answerChoices = [...loadedQuestions.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
            answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestions.correct_answer);

            answerChoices.forEach((choice, index) => {
            formattedQuestion["choice" + (index + 1)] = choice;
            });

            return formattedQuestion;
        });
        startGame();
    })
    .catch(err => console.error(err));

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}; 

const getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign("end.html");
    }
    
    questionCounter++;
    progressText.innerHTML = `Question ${questionCounter}/${MAX_QUESTIONS}`;

    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`; 

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerHTML = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = 
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if(classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);    
            getNewQuestion();
        }, 1000);
    });
});

const incrementScore = num => {
    score +=num;
    scoreText.innerHTML = score;
};