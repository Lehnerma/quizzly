let currentQuestion = 0;
let RIGHT_ANSWERS = 0;

const renderCurrentAmount = () => (document.getElementById("currentAmount").innerText = currentQuestion + 1);

const renderQuestion = () => (document.getElementById("question").innerText = QUESTIONS[currentQuestion].question);

const calculateBar = () => (currentQuestion / QUESTIONS.length) * 100;

const gameIsOver = () => currentQuestion >= QUESTIONS.length - 1;

function init() {
  renderAmount();
  renderCurrentAmount();
  renderQuestion();
  renderAnswers();
}

function renderAmount() {
  document.getElementById("fullAmount").innerText = QUESTIONS.length;
  document.getElementById("right_answers").innerText = RIGHT_ANSWERS;
  document.getElementById("end_fullAmount").innerText = QUESTIONS.length;
}

function renderAnswers() {
  const question = QUESTIONS[currentQuestion];
  document.getElementById("answer_1").innerText = question.answer_1;
  document.getElementById("answer_2").innerText = question.answer_2;
  document.getElementById("answer_3").innerText = question.answer_3;
  document.getElementById("answer_4").innerText = question.answer_4;
}

function countUp() {
  currentQuestion++;
}

function countDown() {
  if (currentQuestion == 0) {
    currentQuestion = QUESTIONS.length - 1;
  } else {
    currentQuestion--;
  }
  init();
}

function checkAnswer(answer) {
  const rightAnswer = QUESTIONS[currentQuestion].right_answer;
  const selectAnswer = answer.slice(-1);
  let idRightAnswer = `answer_${rightAnswer}`;
  if (rightAnswer == selectAnswer) {
    document.getElementById(answer).parentElement.classList.add("bg-success");
    RIGHT_ANSWERS++;
  } else {
    document.getElementById(answer).parentNode.classList.add("bg-danger");
    document.getElementById(idRightAnswer).parentNode.classList.add("bg-success");
  }
  enableBtns();
}

function enableBtns() {
  document.getElementById("countUp").disabled = false;
  document.getElementById("reset-btn").disabled = false;
}
function disabledBtns() {
  document.getElementById("countUp").disabled = true;
  document.getElementById("reset-btn").disabled = true;
}

function resetAnswers() {
  document.getElementById("answer_1").parentElement.classList.remove("bg-success", "bg-danger");
  document.getElementById("answer_2").parentElement.classList.remove("bg-success", "bg-danger");
  document.getElementById("answer_3").parentElement.classList.remove("bg-success", "bg-danger");
  document.getElementById("answer_4").parentElement.classList.remove("bg-success", "bg-danger");
}

function nextQuestion() {
  if (gameIsOver()) {
    toogleEndCard();
    resetAnswers();
  } else {
    resetAnswers();
    disabledBtns();
    countUp();
    renderProgrssbar();
  }
  init();
}

function renderProgrssbar() {
  let bar = document.getElementById("progress_bar");
  bar.innerText = calculateBar() + "%";
  bar.style.width = calculateBar() + "%";
}

function toogleEndCard() {
  document.getElementById("quiz--screen").classList.toggle("d-none");
  document.getElementById("quiz--end").classList.toggle("d-none");
}

function restart() {
  currentQuestion = 0;
  RIGHT_ANSWERS = 0;
  toogleEndCard();
  init();
  renderProgrssbar();
}
