let timer = document.getElementById("timer");
let scoreContent = document.getElementById("score");
let questionsContent = document.getElementsByClassName("bulk");
let submitButton = document.getElementById("submitButton");
let questionContainer = document.getElementById("questionContainer");
countDown();
let time = 60;
function countDown() {
    let count = setInterval(function () {
        time--;
        timer.textContent = "Time: " + time + " seconds left";
        if (time === 0) {
            clearInterval(count);
            timer.remove();
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
    function question() {
    var setQ = sample.question;
    var setAns = sample.answer;
    var setB = sample.b;
    var setC = sample.c;
    var setD = sample.d;

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
    let score = 0;
    let round = 0;
    const scoreMax = 4;


    function incrementScore() {
        score += 1;
        time += 5;
        console.log(score); 
        reset();
        question();

        if (score === 4) {
            gameOver();
        } else {
            console.log('test');
        }
    }

    function decScore() {
        round += 1;
        time -= 10;
        console.log(score);
        reset();
        question();
        if (round === 4) {
            gameOver();
        } else {
            console.log('test');
        }
    }

    

function scoring() {
    

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
    questionContainer.innerHTML = "<questions style='font-size: 4em'> Game over!</br></questions>" + score;
}

question();