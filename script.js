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
var orderDataEl = document.createElement("ol");
var orderElCurly = document.createElement("ol");
var orderJavaArrayEl = document.createElement("ol");
var orderStringValueEl = document.createElement("ol");
var orderConsoleLogEl = document.createElement("ol");

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

// buttons for fourth question
var stringValueBtn1 = document.createElement("button");
var stringValueBtn2 = document.createElement("button");
var stringValueBtn3 = document.createElement("button");
var stringValueBtn4 = document.createElement("button");

// buttons for fifth question
var consoleLogBtn1 = document.createElement("button");
var consoleLogBtn2 = document.createElement("button");
var consoleLogBtn3 = document.createElement("button");
var consoleLogBtn4 = document.createElement("button");

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


   


function startButton(){
    startBtn.addEventListener("click", function(){
        
        timer = setInterval(function(){

            if(timerCount > 0){
                timerCount--;
            timerEl.textContent = timerCount;
            dataFunc();
            curlyBracketsFunc();
            javaArrayFunc()
            
            }
            else if(timerCount === 0){
                clearInterval(timer);
            }
    
        }, 1000)
     });
    }
    
     startButton();


function dataFunc(){
    
    body.appendChild(dataType);
    dataType.appendChild(orderDataEl);
    dataBtn1.textContent = "strings";
    dataBtn2.textContent = "booleans";
    dataBtn3.textContent = "numbers";
    dataBtn4.textContent = "alert";

    orderDataEl.appendChild(dataLi1);
    orderDataEl.appendChild(dataLi2);
    orderDataEl.appendChild(dataLi3);
    orderDataEl.appendChild(dataLi4);

   dataLi1.appendChild(dataBtn1);
   dataLi2.appendChild(dataBtn2);
   dataLi3.appendChild(dataBtn3);
   dataLi4.appendChild(dataBtn4);

dataType.setAttribute("style", "margin-left: 35rem;"); 
}

function curlyBracketsFunc(){
    body.appendChild(curlyBrackets);
   curlyBrackets.appendChild(orderElCurly);

   curlyBtn1.textContent = "parentheses";
   curlyBtn2.textContent = "Arrays";
   curlyBtn3.textContent = "numbers";
   curlyBtn4.textContent = "something";

   orderElCurly.appendChild(liCurly1);
   orderElCurly.appendChild(liCurly2);
   orderElCurly.appendChild(liCurly3);
   orderElCurly.appendChild(liCurly4);

   liCurly1.appendChild(curlyBtn1);
   liCurly2.appendChild(curlyBtn2);
   liCurly3.appendChild(curlyBtn3);
   liCurly4.appendChild(curlyBtn4);

curlyBrackets.setAttribute("style", "margin-left: 35rem;"); 
}


function javaArrayFunc(){
    body.appendChild(javaArray);
    javaArray.appendChild(orderJavaArrayEl);
 
    javaArrayBtn1.textContent = "test1";
    javaArrayBtn2.textContent = "test2";
    javaArrayBtn3.textContent = "test3";
    javaArrayBtn4.textContent = "test4";
 
    orderJavaArrayEl.appendChild(liJavaArray1);
    orderJavaArrayEl.appendChild(liJavaArray2);
    orderJavaArrayEl.appendChild(liJavaArray3);
    orderJavaArrayEl.appendChild(liJavaArray4);
 
    liJavaArray1.appendChild(javaArrayBtn1);
    liJavaArray2.appendChild(javaArrayBtn2);
    liJavaArray3.appendChild(javaArrayBtn3);
    liJavaArray4.appendChild(javaArrayBtn4);
 
    javaArray.setAttribute("style", "margin-left: 35rem;");
}

