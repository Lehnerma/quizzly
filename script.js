let currentQuestion = 0;
let right_answers = 0;

const renderCurrentAmount = () => (document.getElementById("currentAmount").innerText = currentQuestion + 1);
const renderQuestion = () => (document.getElementById("question").innerText = QUESTIONS[currentQuestion].question);

function init() {
  renderAmount();
  renderCurrentAmount();
  renderQuestion();
  renderAnswers();
}

function renderAmount() {
  const FULL_AMOUNT = document.getElementById("fullAmount");
  FULL_AMOUNT.innerText = QUESTIONS.length;
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
  if (currentQuestion >= (QUESTIONS.length -1)) {
    document.getElementById("quiz--screen").classList.add("d-none");
    document.getElementById("quiz--end").classList.remove("d-none");
  } else {
    resetAnswers();
    disabledBtns();
    countUp();
    init();
  }
}
