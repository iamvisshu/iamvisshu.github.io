// quiz.js
let currentQuestionIndex = 0;
let score = 0;
let timer;
const questions = [
    { question: 'Question 1: Java is a statically typed language.', choices: ['True', 'False'], answer: 'True' },
    { question: 'Question 2: In Java, all classes inherit from the Object class.', choices: ['True', 'False'], answer: 'True' },
    { question: 'Question 3: Java supports multiple inheritance.', choices: ['True', 'False'], answer: 'False' },
    { question: 'Question 4: The == operator in Java compares the values of two objects.', choices: ['True', 'False'], answer: 'False' },
    { question: 'Question 5: Java is platform independent.', choices: ['True', 'False'], answer: 'True' },

    { question: 'Question 6: Who invented Java Programming?', choices: ['Guido van Rossum', 'James Gosling', 'Dennis Ritchie', 'Bjarne Stroustrup'], answer: 'James Gosling' },
    { question: 'Question 7: Which component is used to compile, debug and execute the java programs?', choices: ['JRE', 'JIT', 'JDK', 'JVM'], answer: 'JDK' },
    { question: 'Question 8: Which of the following is a type of polymorphism in Java Programming?', choices: ['Multiple polymorphism', 'Compile time polymorphism', 'Multilevel polymorphism', 'Execution time polymorphism'], answer: 'Compile time polymorphism' },
    { question: 'Question 9: Which environment variable is used to set the java path?', choices: ['MAVEN_PATH', 'JAVA_PATH', 'JAVA', 'JAVA_HOME'], answer: 'JAVA_HOME' },

    { question: 'Question 10: Which of the following options lead to the portability and security of Java?', choices: ['A: Bytecode is executed by JVM', 'B: The applet makes the Java code secure and portable', 'C: Use of exception handling', 'D: Dynamic binding between objects'], answer: ['A: Bytecode is executed by JVM', 'B: The applet makes the Java code secure and portable'] },
    { question: 'Question 11: Which of the following are valid declarations of a char in Java?', choices: ['A: char ch = \'\\utea\';', 'B: char ca = \'tea\';', 'C: char cr = \\u0223;', 'D: char cc = \'\\itea\';'], answer: ['A: char ch = \'\\utea\';', 'C: char cr = \\u0223;'] },
    { question: 'Question 12: What does the expression float a = 35 / 0 return in Java?', choices: ['A: 0', 'B: Not a Number', 'C: Infinity', 'D: Run time exception'], answer: ['B: Not a Number', 'C: Infinity'] },

    // Add more questions as needed
    ];
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const closeBtn = document.getElementById('close-btn');
const quitBtn = document.getElementById('quit-btn');

const nameInput = document.getElementById('name-input');
const nameContainer = document.getElementById('name-container');
const nameDisplay = document.getElementById('name-display');
const questionContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');
const timerElement = document.getElementById('time-left');

// This function checks if the user is on a mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
// Declaration check
document.addEventListener('DOMContentLoaded', (event) => {

    if (isMobileDevice()) {
    alert('This quiz page is not supported in mobile browsers. Click OK !!');
    //To disable the page
     document.body.innerHTML = '<div id="mobile-mode-warning">⚠️!! Warning !!⚠️<br><br>This quiz page is not supported in mobile browsers.<br><br>Please Open in Desktop.<br><br> Contact : Admin (@iamvisshu)</div>';
    }

    // Start Quiz Button Action
    const startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', () => {
        const name = document.getElementById('name-input').value;
        if (!name) {
            alert('Please enter your name.');
            return;
        }
        document.getElementById('name-container').style.display = 'none';
        document.getElementById('header').style.visibility = 'visible'; // Show the header
        document.getElementById('name-display').innerHTML = '<b>Name:</b> ' + name;
        document.getElementById('quiz-container').style.display = 'block';
        startQuiz();
        fullScreen();
    });

    // Checkbox Action
    document.getElementById('declaration-checkbox').addEventListener('change', function() {
        startBtn.disabled = !this.checked;
    });
});

//Next button navigation and Finish button 
nextBtn.addEventListener('click', nextQuestion);
finishBtn.addEventListener('click', showResult);

//Clear Response
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
    const selectedChoices = document.querySelectorAll('input[name="choice"]:checked');
    selectedChoices.forEach(choice => {
        choice.checked = false;
    });
});


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
    let timeLeft = 5 * 60; // 2 minutes
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

//Close button on Finish
quitBtn.addEventListener('click', () => {
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

//Name Input Validation
document.getElementById('name-input').addEventListener('keydown', function (e) {
  var regex = /^[A-Za-z\s]*$/;
  if (!regex.test(e.key) && e.key !== 'Backspace') {
    e.preventDefault();
  } else if (this.value.length >= 20 && e.key !== 'Backspace') {
    e.preventDefault();
    alert('Name input not allowed more than 20 characters !!');
  }
});

//End of file

