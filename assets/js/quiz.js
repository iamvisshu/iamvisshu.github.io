// quiz.js
let currentQuestionIndex = 0;
let score = 0;
let timer;
const questions = [
    { question: 'Question 1: Test question one.', choices: ['True', 'False'], answer: 'True' },
    { question: 'Question 2: Test question two.', choices: ['True', 'False'], answer: 'False' },
    { question: 'Question 3: Test question three.', choices: ['A', 'B', 'C', 'D'], answer: 'A' },
    { question: 'Question 4: Test question four.', choices: ['A', 'B', 'C', 'D'], answer: 'B' },
    { question: 'Question 5: Test question five.', choices: ['A', 'B', 'C', 'D'], answer: ['A', 'B'] },
    // Add more questions as needed
];
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const closeBtn = document.getElementById('close-btn');

const nameInput = document.getElementById('name-input');
const nameContainer = document.getElementById('name-container');
const nameDisplay = document.getElementById('name-display');
const questionContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');
const timerElement = document.getElementById('time-left');

// Start Quiz Button Action
startBtn.addEventListener('click', () => {
    const name = nameInput.value;
    if (!name) {
        alert('Please enter your name.');
        return;
    }
    nameContainer.style.display = 'none';
    document.getElementById('header').style.visibility = 'visible'; // Show the header
    nameDisplay.innerHTML = '<b>Name:</b> ' + name;
    questionContainer.style.display = 'block';
    startQuiz();
    fullScreen();
});

//Next button navigation and Finish button 
nextBtn.addEventListener('click', nextQuestion);
finishBtn.addEventListener('click', showResult);

//Fullscreen code
function fullScreen() {
            var myObject = document.documentElement;
            if (myObject.requestFullscreen) {
                myObject.requestFullscreen();
            } else if (myObject.webkitRequestFullscreen) { /* Safari */
                myObject.webkitRequestFullscreen();
            } else if (myObject.msRequestFullscreen) { /* IE11 */
                myObject.msRequestFullscreen();
            }
        }

// Initialize Quiz
function startQuiz() {
    let timeLeft = 2 * 60; // 2 minutes
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            showResult();
        } else {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            timeLeft--;
        }
    }, 1000);
    showQuestion();
}

//Next click to show questions and adding up the score
function nextQuestion() {
    const selectedChoices = Array.from(document.querySelectorAll('input[name="choice"]:checked')).map(input => input.value);
    if (Array.isArray(questions[currentQuestionIndex].answer)) {
        if (selectedChoices.sort().join(',') === questions[currentQuestionIndex].answer.sort().join(',')) {
            score++;
        }
    } else {
        if (selectedChoices[0] === questions[currentQuestionIndex].answer) {
            score++;
        }
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.disabled = true;
        finishBtn.disabled = false;
    }
}

//Show questions on screen
function showQuestion() {
    questionElement.textContent = questions[currentQuestionIndex].question;
    choicesElement.innerHTML = '';
    questions[currentQuestionIndex].choices.forEach(choice => {
        const input = document.createElement('input');
        if (Array.isArray(questions[currentQuestionIndex].answer)) {
            input.type = 'checkbox';
        } else {
            input.type = 'radio';
        }
        input.name = 'choice';
        input.value = choice;
        choicesElement.appendChild(input);
        choicesElement.appendChild(document.createTextNode(choice));
        choicesElement.appendChild(document.createElement('br'));
    });
    // Update question count of Questions visited
    document.getElementById('question-count').innerHTML 
        = `Question Summary<br> Visited : ${currentQuestionIndex + 1} Total : ${questions.length}`;

}

//Show Result on Quiz Finish
function showResult() {
    const selectedChoices = Array.from(document.querySelectorAll('input[name="choice"]:checked')).map(input => input.value);
    if (Array.isArray(questions[currentQuestionIndex].answer)) {
        if (selectedChoices.sort().join(',') === questions[currentQuestionIndex].answer.sort().join(',')) {
            score++;
        }
    } else {
        if (selectedChoices[0] === questions[currentQuestionIndex].answer) {
            score++;
        }
    }
    clearInterval(timer);
    questionContainer.style.display = 'none';
    resultElement.style.display = 'block';
    
    // Show the close button at Finish
    closeBtn.style.display = 'block';
    // Show the Score at Finish
    document.getElementById('resultText').innerHTML 
    = 'Thank You, <b>'+nameInput.value+'</b> !! for giving this Mock test.<br><br>' 
    + 'Your Mock test has successfully ended !! 😍 <br><br> <b>Your Score: ' + score + '</b>'
}

//Close button on Finish
closeBtn.addEventListener('click', () => {
    //window.close();
    open(location, '_self').close();
});

//Code for showing timestamp on footer
window.onload = function() {
  document.getElementById('year').innerHTML = new Date().getFullYear();

  setInterval(function() {
    let now = new Date();
    let dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    let timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    let date = now.toLocaleDateString('en-GB', dateOptions).replace(/\//g, '-');
    let time = now.toLocaleTimeString('en-US', timeOptions);
    let datetime = date + ' ' + time;
    document.getElementById('datetime').innerHTML = datetime;
  }, 1000);
};

// Disable right click script
document.addEventListener('contextmenu', event => event.preventDefault());


