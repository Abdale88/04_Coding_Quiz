var score = document.querySelector(".score-text");
var timerEl = document.querySelector(".time");
var startBtn = document.querySelector(".start-btn");

var btn1 = document.querySelector(".btn-1");
var btn2 = document.querySelector(".btn-2");
var btn3 = document.querySelector(".btn-3");
var btn4 = document.querySelector(".btn-4");

var body = document.body;
var myDiv = document.createElement("div");
var correct = document.createElement("p");
var wrong = document.createElement("p");
correct.setAttribute("style", "margin-left: 35rem");
wrong.setAttribute("style", "margin-left: 35rem");

body.appendChild(myDiv)
myDiv.appendChild(correct);
myDiv.appendChild(wrong);

var counter = 76;
var timerEl;

var questionEl = document.querySelector(".question");

var questionIndex = 0;
var arrayBtn = [btn1, btn2, btn3, btn4];

var dataType = [
    {
    question: "commonly used data types DO NOT include:",
    userChoices: ["alert", "booleans", "string", "numbers"],
    correctChoice: "0",
    },
    {
        question: "The condition in an if/else statement is enclosed within____.",
        userChoices: ["parentheses", "string", "quotes", "square brackets"],
        correctChoice: "1",
    },
    {
        question: "Arrays in JavaScript can be used to store_____.",
        userChoices: ["numbers and strings", "other Arrays", "booleans", "all of the above"],
        correctChoice: "3",
    },
    {
        question: "String value must be enclosed within ____ when  being assigned to variable.",
        userChoices: ["curly brackets", "quotes", "stings", "parentheses"],
        correctChoice: "1",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the ",
        userChoices: ["javaScript", "console.log", "for loop", "terminal/bash"],
        correctChoice: "1",
    },
]

function choose(event){
    if(event.target.getAttribute("id") !== dataType[questionIndex].correctChoice){
        counter =  counter - 10;
        console.log("incorrect");
        
    }
    else{
        console.log("correct");
    }
}


console.log( dataType);

function showQuestions(){
    questionEl.textContent = dataType[questionIndex].question;
                         
    for(var i = 0; i < arrayBtn.length; i++){
        arrayBtn[i].textContent = dataType[questionIndex].userChoices[i];    
    }  
    questionIndex += 1;     
}




btn1.addEventListener("click", choose);
btn2.addEventListener("click", choose);
btn3.addEventListener("click", choose);
btn4.addEventListener("click", choose);


btn1.addEventListener("click", showQuestions);
btn2.addEventListener("click", showQuestions);
btn3.addEventListener("click", showQuestions);
btn4.addEventListener("click", showQuestions);
// function startButton(){
    startBtn.addEventListener("click", showQuestions);
     startBtn.addEventListener("click", function(){ 
         timerInterval = setInterval(function(){
    
            counter--;
            timerEl.textContent = counter
            if(counter > 0){
                return null;
            }
            else{
                clearInterval(timerInterval);
            }
        }, 1000)
        
    
     });
   
