var score = document.querySelector(".score-text");
var timerEl = document.querySelector(".time");
var startBtn = document.querySelector(".start-btn");


var timerCount = 0
var timer;

var body = document.body;
var dataType = document.createElement("div");
var curlyBrackets = document.createElement("div");
var javaArray = document.createElement("div");
var stringValue = document.createElement("div");
var consoleLog = document.createElement("div");

dataType.textContent = "commonly used data types DO NOT include:";
curlyBrackets.textContent  = "The condition in an if/else statement is enclosed within____.";
javaArray.textContent = "Arrays in JavaScript can be used to store_____.";
stringValue.textContent = "String value must be enclosed within ____ when  being assigned to variable.";
consoleLog.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
//====




var liItems = ["strings", "booleans", "alert", "numbers", 
              "quotes", "curly brackets", "parentheses", 
              "square brackets", "numbers and strings", 
              "other Arrays", "all of the above", "commas", 
              "javaScript", "terminal/bash", "for loops", "console.log"
            ];
var randomList = liItems[Math.floor(Math.random() * liItems.length)];

list.textContent = "1: " + randomList;


function startButton(){
    startBtn.addEventListener("click", function(){
        
        timer = setInterval(function(){
            timerCount--;
            timerEl.textContent = timerCount;
    
        }, 1000)
     
     });
    }
    // function countDown(){}
    
     startButton();