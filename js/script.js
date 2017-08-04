/*
 * Game developer Radu Puspana
 * Date           july 2017
 * Game version   1
 */

// 29 iulie, full proff pt mobile

// arary of Strings, the questions
var questions;

// the answers for each question that will be displayed on the page. The link between this structure and the questions array is the index. From these questions a user must select the correct answer
// E.g. answers[0] holds the answers to question[0]
var answers;

// array of correct answers to a specific question. The link between this structure and the questions array is the index
// E.g. correctAnswers[0] holds the correct answer for question[0]
var correctAnswers;

// array of Question objects
var questionObjectArray = [];

// the first index of the questions array
var firstIdxQuestionsArray;

// last index of the questions array
var lastIdxQuestionsArray;

// string entered by the user in window prompt
var userAnswer;

// object to hold each question of the test
var Question = function (qtext, answers, correctAnswer) {
    this.qText = qtext;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
};

// see if the user answered correctly to a question by comparing his answer to
// the object's correctAnswer property.
// return true if this.correctAnswer and userAnswer string match
Question.prototype.isUserAnswerValid = function (userAnswer) {
    if (this.correctAnswer === userAnswer) {
        return true;
    }
    else {
        return false;
    }
};

document.getElementById('promptButton').addEventListener('click', submitPrompt);

var prompt = document.getElementById('questionForm');
var promptAnswer = document.getElementById('promptAnswer');

initializeGame();

generateQuestions();

console.info(questionObjectArray);

// generate a random number between 0 and (questions.length - 1)
var randomNumber = Math.floor(
    Math.random() * (lastIdxQuestionsArray - firstIdxQuestionsArray + 1)) + firstIdxQuestionsArray;

document.getElementById("formQuestion").textContent =
    questionObjectArray[randomNumber].qText;

//console.log("%s",
//           questionObjectArray[randomNumber].qText);

//for(var i = 0; i < questionObjectArray[randomNumber].answers.length; i++) {
//    document.getElementById("promptAnswerOption" + (i + 1)).textContent =
//        "" + (i + 1) + ". " + questionObjectArray[randomNumber].answers[i];
    //    console.log("  %d. %s", i, questionObjectArray[randomNumber].answers[i]);
//}








function submitPrompt() {
    userAnswer = promptAnswer.value;
//    prompt.style.display = 'none';
}

// create an array of Question objects
function generateQuestions() {
    var i;
    for (i = 0; i < questions.length; i = i + 1) {
        questionObjectArray.push(
            new Question(questions[i], answers[i], correctAnswers[i])
        );
    }
}

// initialize game variables
function initializeGame() {
    questions = [
        "How did Eric Clapton learn to play the guitar ?",
        "What was the name of the first band Eric Clapton played in ?"
    ];

    answers = [
        ["By going to classes", "By meeting and playing with friends", "Self-studying"],
        ["Yardbirds", "Faces", "The who"]
    ];

// if i is the index of this array:
// questions[i]      =  question
// answers[i]        =  answers of question[i]
// correctAnswers[i] =  index of correct answer in answers[i]
//                   =  answers[i][correctAnswers[i]] =
//                   =  correct answer to questions[i]
    correctAnswers = [2, 0];

    // based on the questions array length, establish the
    // first and last index of this array
    if (questions.length >= 1) {
        firstIdxQuestionsArray = 0;
        lastIdxQuestionsArray = questions.length - 1;
    }
}
