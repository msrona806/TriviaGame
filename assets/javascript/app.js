// timer to count down seconds left to answer questions, starts at 60
var number = 60;
var intervalId; 

// function to run the counter, decreases by 1 every second
function run() {
  intervalId = setInterval(decrement, 1000);
}

// function to decrement number variable by 1
function decrement() {
number--;

// display the counter on the game page
$("#gameClock").html("<h1>" + number + "<h21");
}
// timer starts when start button clicked
$("#start").on("click", run);

// global variables
// trivia game questions
// game answers
// for loop for questions
// logic to compare answers to questions
// function to start the game
// on-click action for start button
// function to end the game

// show results, display correct answers, incorrect answers, and number of unanswered questions
// code for check boxes