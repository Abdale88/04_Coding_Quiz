var score = document.querySelector(".score-text");
var timerEl = document.querySelector(".time");
var startBtn = document.querySelector(".start-btn");


var timerCount = 10
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

       
var correctAnswer = document.createElement("div");
var wrongAnswer = document.createElement("div");

var userChoice = "string";
body.appendChild(correctAnswer);
body.appendChild(wrongAnswer);



// each of these order lists is for the five questions
var orderDataEl = document.createElement("ol");
var orderElCurly = document.createElement("ol");
var orderJavaArrayEl = document.createElement("ol");
var orderStringValueEl = document.createElement("ol");
var orderConsoleLogEl = document.createElement("ol");


// list for the first question
var dataLi1 = document.createElement("li");
var dataLi2 = document.createElement("li");
var dataLi3 = document.createElement("li");
var dataLi4 = document.createElement("li");

// list for the second question
var liCurly1 = document.createElement("li");
var liCurly2 = document.createElement("li");
var liCurly3 = document.createElement("li");
var liCurly4 = document.createElement("li");

// list for the third question
var liJavaArray1 = document.createElement("li");
var liJavaArray2 = document.createElement("li");
var liJavaArray3 = document.createElement("li");
var liJavaArray4 = document.createElement("li");

// list for the fourth question
var liStringValue1 = document.createElement("li");
var liStringValue2 = document.createElement("li");
var liStringValue3 = document.createElement("li");
var liStringValue4 = document.createElement("li");

// list for the fifth question
var liConsoleLog1 = document.createElement("li");
var liConsoleLog2 = document.createElement("li");
var liConsoleLog3 = document.createElement("li");
var liConsoleLog4 = document.createElement("li");




// function for the first question
function dataFunc(){
    
    body.appendChild(dataType);
    dataType.appendChild(orderDataEl);

    dataLi1.textContent = "strings";
    dataLi2.textContent = "booleans";
    dataLi3.textContent = "alert true";
    dataLi4.textContent = "numbers";

    orderDataEl.appendChild(dataLi1);
    orderDataEl.appendChild(dataLi2);
    orderDataEl.appendChild(dataLi3);
    orderDataEl.appendChild(dataLi4);

dataType.setAttribute("style", "margin-left: 35rem;"); 
orderDataEl.setAttribute("style", "color: rgb(138, 43, 226);")
}

// function for the second question
function curlyBracketsFunc(){
    body.appendChild(curlyBrackets);
   curlyBrackets.appendChild(orderElCurly);

   liCurly1.textContent = "quotes";
   liCurly2.textContent = "curly brackets";
   liCurly3.textContent = "parentheses";
   liCurly4.textContent = "square brackets true";

   orderElCurly.appendChild(liCurly1);
   orderElCurly.appendChild(liCurly2);
   orderElCurly.appendChild(liCurly3);
   orderElCurly.appendChild(liCurly4);

curlyBrackets.setAttribute("style", "margin-left: 35rem;"); 
orderElCurly.setAttribute("style", "color: rgb(138, 43, 226);")
}

// function for the third question
function javaArrayFunc(){
    body.appendChild(javaArray);
    javaArray.appendChild(orderJavaArrayEl);
 
    liJavaArray1.textContent = "numbers and strings";
    liJavaArray2.textContent = "other arrays";
    liJavaArray3.textContent = "booleans";
    liJavaArray4.textContent = "all of the above true";
 
    orderJavaArrayEl.appendChild(liJavaArray1);
    orderJavaArrayEl.appendChild(liJavaArray2);
    orderJavaArrayEl.appendChild(liJavaArray3);
    orderJavaArrayEl.appendChild(liJavaArray4);
 
    javaArray.setAttribute("style", "margin-left: 35rem;");
    orderJavaArrayEl.setAttribute("style", "color: rgb(138, 43, 226);")
}

// function for the fourth question
function StringValueFunc(){
    body.appendChild(stringValue);
    stringValue.appendChild(orderStringValueEl);
 
    liStringValue1.textContent = "commas";
    liStringValue2.textContent = "curly brackets";
    liStringValue3.textContent = "quote true";
    liStringValue4.textContent = "parentheses";
 
    orderStringValueEl.appendChild(liStringValue1);
    orderStringValueEl.appendChild(liStringValue2);
    orderStringValueEl.appendChild(liStringValue3);
    orderStringValueEl.appendChild(liStringValue4);
 
    stringValue.setAttribute("style", "margin-left: 35rem;");
    orderStringValueEl.setAttribute("style", "color: rgb(138, 43, 226);")
}

// function for the fifth question
function consoleLogFunc(){
    body.appendChild(consoleLog);
    consoleLog.appendChild(orderConsoleLogEl);
 
    liConsoleLog1.textContent = "javaScript";
    liConsoleLog2.textContent = "terminal/bash";
    liConsoleLog3.textContent = "for loops";
    liConsoleLog4.textContent = "console.log true";
 
    orderConsoleLogEl.appendChild(liConsoleLog1);
    orderConsoleLogEl.appendChild(liConsoleLog2);
    orderConsoleLogEl.appendChild(liConsoleLog3);
    orderConsoleLogEl.appendChild(liConsoleLog4);
 
 
    consoleLog.setAttribute("style", "margin-left: 35rem;");
    orderConsoleLogEl.setAttribute("style", "color: rgb(138, 43, 226);")
}


function startButton(){
    startBtn.addEventListener("click", function(){
        
        timer = setInterval(function(){
            

            if(timerCount > 0){
                timerCount--;
            timerEl.textContent = timerCount;
            dataFunc();
            curlyBracketsFunc();
            javaArrayFunc()
            StringValueFunc()
            consoleLogFunc()
            dataLi1.addEventListener("click", function(){
                if(timerCount > 0){
                    correctAnswer.textContent = "correct true";

                }
                else{
                    wrongAnswer.textContent = "wrong weeye";
                }
            })
            // curlyBracketsFunc();
            // javaArrayFunc()
            // StringValueFunc()
            // consoleLogFunc()
            }
            else if(timerCount === 0){
                clearInterval(timer);
            }
    
        }, 1000)
     });
    }
    
     startButton();