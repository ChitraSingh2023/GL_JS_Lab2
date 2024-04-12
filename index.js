const questionText = document.getElementById("question");
const optionsText = document.getElementById("options");
const nextbtn = document.getElementById("nextbtn");
const progress = document.getElementById("progress");
const reset = document.getElementById("resetbtn");

let currentQuestionIndex = 0;
let score = 0;

const questions = [{
    question: "What are the different ways to access a html element inside javascript code?",
    options: ['getElementById', 'document.childNodes', 'Both a and b', 'None of the  above'], correctIndex: 2
},
{
    question: 'Which of the following keywords is used to check if a function is an object or not?',
    options: ['isObject', 'Instanceof', 'typeof', 'None of the above'],
    correctIndex: 1
}, {
    question: 'Which language is used for styling web pages??',
    options: ['HTML', 'Jquery', 'css', 'None of the above'],
    correctIndex: 2
},
{
    question: 'JavaScript supports?',
    options: ['Functions', 'XHTML', 'CSS', 'HTML'],
    correctIndex: 0
},
{
    question: 'Which is not a JavaScript Framework?',
    options: ['Python Script', 'JQuery', 'Django', 'NodeJS'],
    correctIndex: 2
}];
function showQuestion() {
    const questionArray = questions[currentQuestionIndex];
    questionText.innerHTML = questionArray.question;
    optionsText.innerHTML = '';
    questionArray.options.forEach((item, index) => {
        const button = document.createElement('button');
        button.textContent = item;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(index));
        optionsText.appendChild(button);
        progress.innerHTML = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    });
    nextbtn.style.display = 'none';
}
function checkAnswer(selectedindex) {
    const question = questions[currentQuestionIndex];
    if (selectedindex == question.correctIndex) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }

}
function showResults() {
    var per = (score / questions.length) * 100;
    questionText.textContent = `You scored ${score} out of ${questions.length}! and  ${per}%. `;
    optionsText.innerHTML = '';
    nextbtn.style.display = 'none';
    reset.style.display = 'block';
    //reset.addEventListener("click",(location.reload()));

}


showQuestion();