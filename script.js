var score = document.querySelector(".score-text");
var timerEl = document.querySelector(".time");
var startBtn = document.querySelector(".start-btn");


var timerCount = 60
var timer;


var listEl = ["strings", "booleans", "alert", "numbers", 
              "quotes", "curly brackets", "parentheses", 
              "square brackets", "numbers and strings", 
              "other Arrays", "all of the above", "commas", 
              "javaScript", "terminal/bash", "for loops", "console.log"
            ];
var randomEl = listEl[Math.floor(Math.random() * listEl.length)];

console.log("this is randomEl:>> "+ randomEl);

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