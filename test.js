

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
//         show score
//         Form 
//             enter initial
//             save to localStorage


// =============================

// high score page (highscore.html page)
//     go back to game 
//     clear high scores 


// var questions = [
//     {
//         q: "question 1 is _____",
//         a: {
//             a: "one",
//             b: "two",
//             c: "three",
//             d: "four"
//         },
//         correctA: "a"
//     },
//     {
//         q: "question 2 is _____",
//         a: {
//             a: "one",
//             b: "two",
//             c: "three",
//             d: "four"
//         },
//         correctA: "b"
//     },
//     {
//         q: "question 3 is _____",
//         a: {
//             a: "3 one",
//             b: "3 two",
//             c: "3 three",
//             d: "3 four"
//         },
//         correctA: "c"
//     },
//     {
//         q: "question 4 is _____",
//         a: {
//             a: "4 one",
//             b: "4 two",
//             c: "4 three",
//             d: "4 four"
//         },
//         correctA: "d"
//     },
// ]
var questions = [ "question 1 is ----", "question 2 is ----", "question 3 is ----", "question 4 is ----"];
var answers = ["first", "second", "third", "fourth"];

var score = 0;
var timerEl = document.getElementById('score');
var buttonEl = document.querySelector("#start-quiz");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("#answerChoices");

// questionEl.append("question text");
// answerEl.append("answer text");

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
    //TODO remove START QUIZ button
    
    // console.log(questions)
    // console.log(questions[0].q)
    // console.log(questions[0].a)
    // console.log(Object.keys(questions[0]))
    // console.log(Object.keys(questions[0].a))
    // console.log(Object.values(questions[0].a))
    // console.log(Object.keys(questions[0].a)[0])
    // console.log(Object.keys(questions[0].a)[1])
    // console.log("correct answer = " + questions[0].correctA)
    
    
    for (var i=0; i<questions.length; i++) {
        

        questionEl.append(questions[i]);
        console.log(questions[i])
        // for loop for answer choices 
        // for (var answer in questions[i].a) {
        //     //make button
        //     var answerBtn = document.createElement("button");
        //     answerBtn.textContent = questions[i].a[answer];
        //     console.log("value = " + questions[i].a[answer])
        //     // console.log(Object.values(questions[i].a)[answer]);
        //     console.log(answer)
        //     // console.log(questions[i].a[answer])
        // }
        for (var j=0; j<answers.length; j++) {
            console.log(answers[j]);
            var answerBtn = document.createElement("button");
            answerBtn.setAttribute("class", "btn")
            answerBtn.textContent = answers[j];
            answerEl.append(answerBtn);
        }
    }

    //create answer buttons
}

var startGame = function() {
    // countdown();
    createQuestion();
}


buttonEl.addEventListener("click", startGame);