let timer = document.getElementById("timer");
let scoreContent = document.getElementById("score");
let questionsContent = document.getElementsByClassName("bulk");
let submitButton = document.getElementById("submitButton");
let questionContainer = document.getElementById("questionContainer");
let finalContainer = document.getElementById("finalContainer");
let finalContainerMsg = document.getElementById("finalContainerMsg");
countDown();
let time = 60;
function countDown() {
    let count = setInterval(function () {
        time--;
        timer.textContent = "Time: " + time + " seconds left";
        if (time === 0) {
            clearInterval(count);
            timer.remove();
            gameOver();
        }
    }, 1000);
}
    const question1 = {
        question: "How do you link a JavaScript file in HTML?",
        answer: "<script>",
        b: "<scripts>",
        c: "<tag>",
        d: "<link>"
    };

    const question2 = {
        question: "How do you declare a constant variable in JavaScript?",
        answer: "const",
        b: "let",
        c: "var",
        d: "function"
    };

    const question3 = {
        question: "Which method in JavaScript remove the first element of an array and returns it?",
        answer: ".shift()",
        b: ".pop()",
        c: ".cut()",
        d: ".push()"
    };

    const question4 = {
        question: "How would you change something into a string to store it in local storage?",
        answer: "JSON.stringify()",
        b: "JSON.parse()",
        c: "JSON.text()",
        d: "JSON.word()"
    };

    const question5 = {
        question: "How would you get rid of something from the DOM?",
        answer: ".remove()",
        b: ".purge()",
        c: ".trash()",
        d: ".flip()"
    };

    const question6 = {
        question: "What type of programming language is JavaScript?",
        answer: "Object Oriented",
        b: "Object Grounded",
        c: "Object Fixed",
        d: "Object Based"
    };

    const question7 = {
        question: "Which symbol means negative/not in JavaScript?",
        answer: "!",
        b: "?",
        c: "&",
        d: "#"
    };

    const question8 = {
        question: "What does Math.floor do in JavaScript?",
        answer: "Rounds down and returns the largest number",
        b: "Rounds up and returns the largest number",
        c: "Rounds down and returns the smallest number",
        d: "Rounds up and returns the smallest number"
    };
    let score = 0;
    let round = 0;
    const scoreMax = 8;
    
    function question() {
        let mainQBank = [question1, question2, question3, question4, question5, question6, question7, question8];
    for (var i = 0; i <= round; i++) {
        qBank = mainQBank.shift();
    }
if (i > scoreMax) {
    gameOver();
} else {console.log("");}

    var setQ = qBank.question;
    var setAns = qBank.answer;
    var setB = qBank.b;
    var setC = qBank.c;
    var setD = qBank.d;

    let mainQuestion = document.getElementById("mainQuestion");
    mainQuestion.append("Question: " + setQ);

    let mainAns = document.getElementById("mainAns");
    mainAns.append(setAns);
    mainAns.style.order = Math.floor(Math.random() * 4);
    let mainB = document.getElementById("mainB");
    mainB.append(setB);
    mainB.style.order = Math.floor(Math.random() * 4);
    let mainC = document.getElementById("mainC");
    mainC.append(setC);
    mainC.style.order = Math.floor(Math.random() * 4);
    let mainD = document.getElementById("mainD");
    mainD.append(setD);
    mainD.style.order = Math.floor(Math.random() * 4);
    }
    mainAns.addEventListener("click", question);
    mainB.addEventListener("click", question);
    mainC.addEventListener("click", question);
    mainD.addEventListener("click", question);
    questionsContent[0].addEventListener('click', incrementScore);
    questionsContent[1].addEventListener('click', decScore);
    questionsContent[2].addEventListener('click', decScore);
    questionsContent[3].addEventListener('click', decScore);


    function incrementScore() {
        score += 1;
        round += 1;
        time += 5;
        reset();
        question();
        if (score === scoreMax) {
            clearInterval(count);
            timer.remove();
            gameOver();
        } else {
            console.log('');
        }
    }

    function decScore() {
        round += 1;
        if (time <= 10) {
            gameOver();
            timer.remove();
        } else {
            console.log('');
        }
        time -= 10;
        reset();
        question();
        if (round === scoreMax) {
            gameOver();
        } else {
            console.log('');
        }
    }

function reset() {
    mainQuestion.innerHTML = '';
    mainAns.innerHTML = '';
    mainB.innerHTML = '';
    mainC.innerHTML = '';
    mainD.innerHTML = '';
}
function gameOver() {
    time = 0;
    timer.remove();
    questionContainer.remove();
    let finalScoreMsg = score + "/" + scoreMax + "!";
    finalContainer.innerHTML = finalScoreMsg;
    finalContainerMsg.innerHTML = "Check the highscore board to see how you did!";
    getUsername();
    scores();
}

function getUsername() {
    let finalScore = score + "/" + scoreMax;
    let username = prompt("The quiz is over!\nPlease enter your name to save your score!");
    if (username == null) {
        alert("Name cannot be empty, please try again.")
        getUsername();
    } else if (username === ""){
        alert("Name cannot be empty, please try again.")
        getUsername();
    } else {
        localStorage.setItem("username", JSON.stringify(username));
        localStorage.setItem("score", JSON.stringify(finalScore));
        console.log(finalScore);
    } 
}

function scores() {
    let mainName = JSON.parse(localStorage.getItem("username"));
    let topScore = JSON.parse(localStorage.getItem("score"));
    let combo = "Name: " + mainName + "</br>" + "Score: " + topScore + "</br>" + "</br>";
    let currentScoreList = JSON.parse(localStorage.getItem("scoreList"));
    if (currentScoreList) {
        currentScoreList.push(combo);
        localStorage.setItem("scoreList", JSON.stringify(currentScoreList));
    } else {
        let newScoreList = [];
        newScoreList.push(combo);
        localStorage.setItem("scoreList", JSON.stringify(newScoreList));
    }
    }

    function loadScores() {
        let finalScoreList = JSON.parse(localStorage.getItem("scoreList"));
        let noCommaScoreList = finalScoreList.join('');
        let container = document.createElement('entry');
        container.innerHTML = (noCommaScoreList);
        document.getElementById("entry").appendChild(container);
    }

question();