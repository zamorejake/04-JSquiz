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
score.addEventListener("click", highScore);
function highScore() {


}

