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
    question1: "Metatarsals and phalanges are found in which part of the body?",
    answers: ["Foot", "Hand", "Knee"],
    Correct: 0
  },
  {
    question2: "A bone is joined to a muscle by which structure?",
    answers: ["Ligament", "Vein", "Tendon"],
    correct: 2
  },

  {
    question3: "What is the largest bone in the body?",
    answers:["Spine", "Humerus", "Femur"],
    correct: 2
  },
  {
    question4: "Which protein forms hair and nails?",
    answers: ["Casein", "Keratin", "Ferritin"],
    correct: 1
  },
  {
    question5: "How many bones are in the human body?", 
    answers: ["206", "175", "310"],
    correct: 0
  },
  {
    question6: "What is the anatomical name for the kneecap?", 
    answers: ["Condyle", "Patella", "Tibia"],
    correct: 1
  },
  {
    question7: "What’s the smallest bone in the body?",
    answers: ["Coccyx", "Lunate", "Stapes"],
    correct: 2
  }
]

// for loop for questions
for(var i=0; i<questions.length; i++){

//if statement needed to compare user answer to correct answer. If user answer is correct, correct counter increases by 1 and alert pops up that says "Good Job!" . If user answer is incorrect, wrong counter increases by 1 and alert pops up that says "That's not right!". If question is not answered, incomplete increases by 1.

}

// append totals to score div in html

// function to end the game

// show results, display correct answers, incorrect answers, and number of unanswered questions
