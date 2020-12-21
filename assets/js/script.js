
// THE PLAN

//make timer

//come up with object/array with question and answers

//start game
//start timer

//for loop cycles through questions
//     if (correct) {
//         say 'correct'
//         go to next question if time>0 or question.length>0
//     } else {
//         say 'wrong'
//         subtract 10 seconds from timer 
//         go to next question if time>0 or question.length>0
//     }
//     if timer = 0 or question.length = 0
//         end Game 
//         show score/time
//         Form 
//             enter initial
//             save to initial and score to localStorage


// =============================

// high score page (highscore.html page)
//     go back to game 
//     clear high scores 

// =============================


//TODO figure out how to store this into 1 object in stead of 2 arrays
var questions = [ "question 1 is ----", "question 2 is ----", "question 3 is ----", "question 4 is ----"];
var answers = ["first", "second", "third", "fourth"];

//the time left over is the score
var score = 0;

var timerEl = document.getElementById('score');
var buttonEl = document.getElementById("start-quiz");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answerChoices");

//time/score
var countdown = function() {
    console.log('start clicked')
    var timeLeft = 5;
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
            console.log('score ' + timeLeft)
        }
        else {
            timerEl.textContent = ' ';
            clearInterval(timeInterval);
            console.log('times up')
        }
    }, 1000)
}

var createQuestion = function() {
    //TODO remove <"opening"> div once user presses START QUIZ button
    //TODO questions/answers should appear <"opening"> div container

    for (var i=0; i<questions.length; i++) {
        
        questionEl.append(questions[i]);
        console.log(questions[i])

        for (var j=0; j<answers.length; j++) {
            console.log(answers[j]);
            var answerBtn = document.createElement("button");
            answerBtn.setAttribute("class", "btn")
            answerBtn.textContent = answers[j];
            answerEl.append(answerBtn);
        }
        // TODO wait for user to pick an answer.  function from addEventListener
        // if questions[i] === answers[i]
        //     go to next question 
        // else
        //     subtract 10 seconds from timer 
        //     go to next question
    }

}

// TODO function for final SpeechRecognitionResultList

var startGame = function() {
    countdown();
    createQuestion();
}


buttonEl.addEventListener("click", startGame);

// TODO addEventListener when user picks an answer 