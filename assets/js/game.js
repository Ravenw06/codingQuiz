const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is HTML stands for?',
        choice1 : 'H123', 
        choice2 : 'HTML', 
        choice3 : 'HTML', 
        choice4 : 'HTML', 
        answer: 2,
    },
    {
        question: 'What is HTML stands for?',
        choice1 : 'HTML', 
        choice2 : 'HTML', 
        choice3 : 'HTML', 
        choice4 : 'HTML', 
        answer: 2,
    },
    {
        question: 'What is HTML stands for?',
        choice1 : 'HTML', 
        choice2 : 'HTML', 
        choice3 : 'HTML', 
        choice4 : 'HTML', 
        answer: 2,
    },
    {
        question: 'What is HTML stands for?',
        choice1 : 'HTML', 
        choice2 : 'HTML', 
        choice3 : 'HTML', 
        choice4 : 'HTML', 
        answer: 2,
    },
    {
        question: 'What is HTML stands for?',
        choice1 : 'HTML', 
        choice2 : 'HTML', 
        choice3 : 'HTML', 
        choice4 : 'HTML', 
        answer: 2,
    },
    {
        question: 'What is HTML stands for?',
        choice1 : 'HTML', 
        choice2 : 'HTML', 
        choice3 : 'HTML', 
        choice4 : 'HTML', 
        answer: 2,
    },
]
const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0; 
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull. style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`

    const questionIndex = Math.floor(Math.random() *availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]

    })
    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}
startGame()

function countdown() {
    var timeLeft = 60;
  
    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + "s";
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }
countdown()