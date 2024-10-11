let score = 0;
let EntiretimeLeft = 60;
let timer;

function startGame() {
    score = 0;
    timeLeft = 60;
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('time').textContent = `Time Left: ${EntiretimeLeft} seconds`;
    document.getElementById('message').textContent = '';

    generateQuestion();
    timer = setInterval(updateTimer, 1000);
}

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('question').textContent = `What is ${num1} + ${num2}?`;
    document.getElementById('question').dataset.answer = num1 + num2;
}

function updateTimer() {
    timeLeft--;
    document.getElementById('time').textContent = `Time Left: ${timeLeft} seconds`;

    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
    }
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = parseInt(document.getElementById('question').dataset.answer);

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('score').textContent = `Score: ${score}`;
        document.getElementById('message').textContent = 'Correct!';

        document.getElementById('answer').value = '';
        generateQuestion();
    } else {
        document.getElementById('message').textContent = 'Wrong! Try again.';
    }
}

function endGame() {
    document.getElementById('question').textContent = 'Game Over!';
    document.getElementById('message').textContent = `Final Score: ${score}`;
    document.getElementById('answer').disabled = true;
    document.getElementById('submit').disabled = true;
}

document.getElementById('submit').addEventListener('click', checkAnswer);
window.onload = startGame;
