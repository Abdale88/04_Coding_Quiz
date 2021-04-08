var score = document.querySelector(".score-text");
var timerEl = document.querySelector(".time");
var startBtn = document.querySelector(".start-btn");


var timerCount = 3
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

// each of these order lists is for the five questions
var orderEl = document.createElement("ol");
var oderElCurly = document.createElement("ol");

// buttons for first question
var dataBtn1 = document.createElement("button");
var dataBtn2 = document.createElement("button");
var dataBtn3 = document.createElement("button");
var dataBtn4 = document.createElement("button");

// buttons for second question
var curlyBtn1 = document.createElement("button");
var curlyBtn2 = document.createElement("button");
var curlyBtn3 = document.createElement("button");
var curlyBtn4 = document.createElement("button");

// buttons for third question
var javaArrayBtn1 = document.createElement("button");
var javaArrayBtn2 = document.createElement("button");
var javaArrayBtn3 = document.createElement("button");
var javaArrayBtn4 = document.createElement("button");

// buttons for four question
var stringValueBtn1 = document.createElement("button");
var stringValueBtn2 = document.createElement("button");
var stringValueBtn3 = document.createElement("button");
var stringValueBtn4 = document.createElement("button");

// buttons for fifth question
var consoleLogBtn1 = document.createElement("button");
var consoleLogBtn2 = document.createElement("button");
var consoleLogBtn3 = document.createElement("button");
var consoleLogBtn4 = document.createElement("button");

var dataLi1 = document.createElement("li");
var dataLi2 = document.createElement("li");
var dataLi3 = document.createElement("li");
var dataLi4 = document.createElement("li");

var liCurly1 = document.createElement("li");
var liCurly2 = document.createElement("li");
var liCurly3 = document.createElement("li");
var liCurly4 = document.createElement("li");


   



// list.textContent = "1: " + randomList;

function startButton(){
    startBtn.addEventListener("click", function(){
        
        timer = setInterval(function(){

            if(timerCount > 0){
                timerCount--;
            timerEl.textContent = timerCount;
            dataFunc();
            }
            else if(timerCount === 0){
                curlyBracketsFunc();
                clearInterval(timer);
            }
    
        }, 1000)
     });
    }
    
     startButton();


function dataFunc(){
    
    body.appendChild(dataType);
    dataType.appendChild(orderEl);
    dataBtn1.textContent = "strings";
    dataBtn2.textContent = "booleans";
    dataBtn3.textContent = "numbers";
    dataBtn4.textContent = "alert";

   orderEl.appendChild(liCurly1);
   orderEl.appendChild(liCurly2);
   orderEl.appendChild(liCurly3);
   orderEl.appendChild(liCurly4);

   liCurly1.appendChild(dataBtn1);
   liCurly2.appendChild(dataBtn2);
   liCurly3.appendChild(dataBtn3);
   liCurly4.appendChild(dataBtn4);

dataType.setAttribute("style", "margin-left: 35rem;"); 
}



// here you go
// HTMLIFrameElement