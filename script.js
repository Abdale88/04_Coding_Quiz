var score = document.querySelector(".score-text");
var timerEl = document.querySelector(".time");
var startBtn = document.querySelector(".start-btn");


var timerCount = 60
var timer;

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