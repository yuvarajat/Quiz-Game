const questionJSON = [
  {
    category: "Food & Drink",
    id: "qa-1",
    correctAnswer: "Three",
    answers: ["Two", "Three", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    category: "Science",
    id: "qa-2",
    correctAnswer: "Mars",
    answers: ["Venus", "Mars", "Jupiter", "Saturn"],
    question: "Which planet is known as the 'Red Planet'?",
  },
  {
    category: "History",
    id: "qa-3",
    correctAnswer: "1912",
    answers: ["1908", "1912", "1920", "1931"],
    question: "In which year did the Titanic sink?",
  },
  {
    category: "Nature",
    id: "qa-4",
    correctAnswer: "Blue Whale",
    answers: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    question: "What is the largest mammal in the world?",
  },
  {
    category: "Literature",
    id: "qa-5",
    correctAnswer: "William Shakespeare",
    answers: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    question: "Who wrote the play 'Romeo and Juliet'?",
  },
];

let score = 0;
let currentQuestion = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextEl = document.getElementById("next");

showQuestion();

function showQuestion() {
  const { correctAnswer, answers, question } = questionJSON[currentQuestion];
  questionEl.textContent = question;
  const shuffledAnswers = shuffledOptions(answers);

  shuffledAnswers.forEach(function (answer) {
    const newOption = document.createElement("button");
    newOption.value = answer;
    newOption.textContent = answer;
    optionsEl.appendChild(newOption);

    newOption.addEventListener("click", function () {
      if (newOption.textContent === correctAnswer) {
        score += 1;
      } else {
        score -= 0.25;
      }
      scoreEl.textContent = `Score: ${score} / ${questionJSON.length}`;
      nextQuestion();
    });
  });
}

function nextQuestion() {
  currentQuestion++;
  optionsEl.textContent = "";
  if (currentQuestion >= questionJSON.length) {
    questionEl.textContent = "Quiz Completed!!";
    nextEl.remove();
  } else {
    showQuestion();
  }
}

nextEl.textContent = "Next";

nextEl.addEventListener("click", function () {
  scoreEl.textContent = `Score: ${score} / ${questionJSON.length}`;
  nextQuestion();
});

// for (let i = 0; i < answers.length; i++){
//   const newOption = document.createElement('button');
//   newOption.value = answers[i];
//   newOption.textContent = answers[i];
//   optionsEl.appendChild(newOption);
// }

function shuffledOptions(answers) {
  for (let i = answers.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i);
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
  return answers;
}
