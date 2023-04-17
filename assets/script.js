let timer = document.getElementById("timer");
let scoreContent = document.getElementById("score");
let questionsContent = document.getElementsByClassName("bulk");
let submitButton = document.getElementById("submitButton");
let questionContainer = document.getElementById("questionContainer");
let finalContainer = document.getElementById("finalContainer");
let entryContainer = document.getElementById("entry");
countDown();
let time = 6;
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
    const sample = {
        question: "Q1",
        answer: "1",
        b: "2",
        c: "3",
        d: "4"
    };

    const sample2 = {
        question: "Q2",
        answer: "5",
        b: "6",
        c: "7",
        d: "8"
    };

    const sample3 = {
        question: "Q3",
        answer: "9",
        b: "10",
        c: "11",
        d: "12"
    };

    const sample4 = {
        question: "Q4",
        answer: "13",
        b: "14",
        c: "15",
        d: "16"
    };

    const sample5 = {
        question: "Q4",
        answer: "13",
        b: "14",
        c: "15",
        d: "16"
    };

    const sample6 = {
        question: "Q4",
        answer: "13",
        b: "14",
        c: "15",
        d: "16"
    };

    const sample7 = {
        question: "Q4",
        answer: "13",
        b: "14",
        c: "15",
        d: "16"
    };

    const sample8 = {
        question: "Q8",
        answer: "13",
        b: "14",
        c: "15",
        d: "16"
    };
    let score = 0;
    let round = 0;
    const scoreMax = 8;
    
    function question() {
        let qBank = [sample, sample2, sample3, sample4, sample5, sample6, sample7, sample8];
    for (var i = 0; i <= round; i++) {
        qBank2 = qBank.shift();
    }
if (i > scoreMax) {
    gameOver();
} else {console.log("");}

    var setQ = qBank2.question;
    var setAns = qBank2.answer;
    var setB = qBank2.b;
    var setC = qBank2.c;
    var setD = qBank2.d;

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


function highScore() {

    console.log("this works");
}

function reset() {
    mainQuestion.innerHTML = '';
    mainAns.innerHTML = '';
    mainB.innerHTML = '';
    mainC.innerHTML = '';
    mainD.innerHTML = '';
}

function gameOver() {
    timer.remove();
    questionContainer.remove();
    let finalScoreMsg = score + "/" + scoreMax + "!";
    let finalScore = score + "/" + scoreMax;
    finalContainer.innerHTML = finalScoreMsg;
    getUsername();
}

function getUsername() {
    let username = prompt("Please enter your name to save your score!");
    if (username != "" || null) {
        localStorage.setItem("name", username);
        localStorage.setItem("score", finalScore);
    } else {
        alert("Name cannot be empty, please try again.")
        gameOver();
    }
}

question();