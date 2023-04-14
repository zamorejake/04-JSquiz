let timer = document.getElementById("timer");
let score = document.getElementById("score");
let quiz = document.getElementById("quiz");
countDown();

function countDown() {
    let time = 60;

    let count = setInterval(function () {
        time--;
        timer.textContent = "Time: " + time + " seconds left";
        if (time === 0) {
            clearInterval(count);
            timer.remove();
        }
    }, 1000);
}
/*submitButton.addEventListener("click", question);
function highScore() {


}*/


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

    var setQ = sample.question;
    var setAns = sample.answer;
    var setB = sample.b;
    var setC = sample.c;
    var setD = sample.d;

    let mainQuestion = document.getElementById("mainQuestion");
    mainQuestion.append(setQ);

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
    
/*function question() {
    let example = [sample, sample2, sample3, sample4];
    let qBank = example.splice(Math.floor(Math.random() * example.length),1);
    console.log(qBank);
    console.log(example);
} */

function scoring() {
    let score = 0;

}
