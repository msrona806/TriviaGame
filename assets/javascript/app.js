$(document).ready (function() {
// global variables

// timer to count down seconds left to answer questions, starts at 60
var number = 5;
var intervalId; 

// function to run the counter, decreases by 1 every second
function run() {
  intervalId = setInterval(decrement, 1000);
}

// function to decrement number variable by 1
function decrement() {
number--;

// display the counter on the game page
$("#gameClock").html("<h1>" + number + "<h1>");
}
// when start button clicked:,

$("#start").click(run);
$(".btn").click(remove);

// stop the counter when it reaches 0
if (number === 0) {
  
  //run stop function and display an alert
  stop();
  alert("Time's up!!!");
}

// function to stop the counter **NOT WORKING**
function stop() {
  clearInterval();
}
});
// trivia game questions

// game answers
// for loop for questions
// logic to compare answers to questions
// function to start the game

// function to end the game

// show results, display correct answers, incorrect answers, and number of unanswered questions
// code for check boxes