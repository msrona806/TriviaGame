$(document).ready (function() {

  // global variables
var correct=0;
var wrong=0;
var incomplete=0;

// timer to count down seconds left to answer questions, starts at 60
var number = 5;
var intervalId; 

// function to run the counter, decreases by 1 every second
function run() { 
  $("#start").hide();
  intervalId = setInterval(decrement, 1000);

}

// function to decrement number variable by 1
function decrement() {
number--;

// display the counter on the game page
$("#gameClock").html("<h1>" + number + "<h1>");

if (number === 0) {
  
  //run stop function and display an alert
  stop();
  }
}
// when start button clicked:

$("#start").click(run);

// function to stop the counter 
function stop() {
  clearInterval(intervalId);
  alert("Time's up!!!");
}

});

// trivia game questions
var questions= [
  {
    question: "Metatarsals and phalanges are found in which part of the body?",
    answer: ["Foot", "Hand", "Knee"],
    Correct: 0
  },
  {
    question: "A bone is joined to a muscle by which structure?",
    answer: ["Ligament", "Vein", "Tendon"],
    correct: 2
  },

  {
    question: "What is the largest bone in the body?",
    answer:["Spine", "Humerus", "Femur"],
    correct: 2
  },
  {
    question: "Which protein forms hair and nails?",
    answer: ["Casein", "Keratin", "Ferritin"],
    correct: 1
  },
  {
    question: "How many bones are in the human body?", 
    answer: ["206", "175", "310"],
    correct: 0
  },
  {
    question: "What is the anatomical name for the kneecap?", 
    answer: ["Condyle", "Patella", "Tibia"],
    correct: 1
  },
  {
    question: "What’s the smallest bone in the body?",
    answer: ["Coccyx", "Lunate", "Stapes"], //*****change answers to single lines, answer 1, 2, etc...***************
    correct: 2
  }
]
// display questions on html page


// for loop for questions
for(var i=0; i<questions.length; i++){
$(".question").text(questions [i].question);
console.log(questions[i].question);


for(var j=0; j < questions[i].answer.length; j++){
$(".answers").append(questions[i].answer[j]);   // *******remove answer for loop************

} //this is telling it how many times to go thru loop

//if statement needed to compare user answer to correct answer. If user answer is correct, correct counter increases by 1 and alert pops up that says "Good Job!" . If user answer is incorrect, wrong counter increases by 1 and alert pops up that says "That's not right!". If question is not answered, incomplete increases by 1.

}

// append totals to score div in html

// function to end the game

// show results, display correct answers, incorrect answers, and number of unanswered questions
