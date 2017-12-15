$(document).ready (function() {


  
var correct=0;
var wrong=0;
var incomplete=0;
var MAXTIME = 5
QAindex = 0; // global variables

// timer to count down seconds left to answer questions, starts at 60
var number = MAXTIME;
intervalId = 0; 

// function to run the counter, decreases by 1 every second
function run() { 
  $(".start").hide(); //hides start button
  $(".question").empty(); // clears questions after it has been answered
  $(".answers").empty();

  // append totals to score div in html
  $("#ansCorrect").append(correct);
  $("#ansWrong").append(wrong);
  $("#blank").append(incomplete);
  
  intervalId = setInterval(decrement, 1000);
  displayQuestion(QAindex); //show first question
}

// function to display question
function displayQuestion(index) {
  var questionObj = questions[index];
  QAindex++;

// show question in html
  var questionElt = $("<h1>").addClass("questionKey").text(questionObj.question);
  $(".question").append(questionElt);
  console.log(questionObj.question);

// loop questions and answers and make a list of answers
  var answerList = $("<ul>").addClass("answerList");
  for(var i=0; i < questionObj.answer.length; i++) {
    var answerItem = $("<li>").addClass("answerItem").data("correct", questionObj.correct);
    answerItem.text(questionObj.answer[i]);
    answerList.append(answerItem);
   
    console.log(questionObj.answer[i]);
  };
  $(".answers").append(answerList)
};

$("body").on("click",".answerItem", function(){
  clearInterval(intervalId);
  number = MAXTIME;
  var clickedItemText = $(this).text();
  var correctAnswer = $(this).data("correct");
  
  if (clickedItemText === correctAnswer) {
    correct++;
  }
  else if (number === 0) {
    incomplete++;
    displayQuestion();
  }
  else {
    wrong++;
  }
  run();
  
})

// function to decrement number variable by 1
function decrement() {
number--;

// display the counter on the game page
$("#gameClock").html("<h1>" + number + "<h1>");

if (number === -1) {
  
  //run stop function and display an alert
  stop();
  QAindex++;
  }
}
// when start button clicked:

$(".start").click(run);

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
    answer: ["Foot ", "Hand ", "Knee "],
    correct: "Foot"
  },
  {
    question: "A bone is joined to a muscle by which structure?",
    answer: ["Ligament", "Vein", "Tendon"],
    correct: "Tendon"
  },

  {
    question: "What is the largest bone in the body?",
    answer:["Spine", "Humerus", "Femur"],
    correct: "Femur"
  },
  {
    question: "Which protein forms hair and nails?",
    answer: ["Casein", "Keratin", "Ferritin"],
    correct: "Keratin"
  },
  {
    question: "How many bones are in the human body?", 
    answer: ["206", "175", "310"],
    correct: "206"
  },
  {
    question: "What is the anatomical name for the kneecap?", 
    answer: ["Condyle", "Patella", "Tibia"],
    correct: "Patella"
  },
  {
    question: "What’s the smallest bone in the body?",
    answer: ["Coccyx", "Lunate", "Stapes"],
    correct: "Stapes"
  }
]


//if statement needed to compare user answer to correct answer. If user answer is correct, correct counter increases by 1 and alert pops up that says "Good Job!" . If user answer is incorrect, wrong counter increases by 1 and alert pops up that says "That's not right!". If question is not answered, incomplete increases by 1.

// function to end the game

// show results, display correct answers, incorrect answers, and number of unanswered questions
