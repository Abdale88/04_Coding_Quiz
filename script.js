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

var questionEl = document.querySelector(".question");

var questionIndex = 0;
var arrayBtn = [btn1, btn2, btn3, btn4];

var dataType = [
    {
    question: "commonly used data types DO NOT include:",
    userChoices: ["alert", "booleans", "alert", "numbers"],
    correctChoice: 2,
    },
    {
        question: "The condition in an if/else statement is enclosed within____.",
        userChoices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctChoice: 2,
    },
    {
        question: "Arrays in JavaScript can be used to store_____.",
        userChoices: ["numbers and strings", "other Arrays", "booleans", "all of the above"],
        correctChoice: 3,
    },
    {
        question: "String value must be enclosed within ____ when  being assigned to variable.",
        userChoices: ["quotes", "commas", "curly brackets", "parentheses"],
        correctChoice: 0,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the ",
        userChoices: ["javaScript", "console.log", "for loop", "terminal/bash"],
        correctChoice: 1,
    },
]



console.log( dataType);



function showQuestions(){
    questionEl.textContent = dataType[questionIndex].question;
                         
    for(var i = 0; i < arrayBtn.length; i++){
        arrayBtn[i].textContent = dataType[questionIndex].userChoices[i];    
    }  
    console.log(questionIndex);
    questionIndex += 1;     
}





// function startButton(){
    startBtn.addEventListener("click", showQuestions);
     startBtn.addEventListener("click", function(){ 
        var timerInterval = setInterval(function(){
    
            counter--;
            timerEl.textContent = counter
            if(counter > 0){
                
            }
            else{
                clearInterval(timerInterval);
            }
            

            btn1.addEventListener("click", showQuestions);
            if(dataType[questionIndex].userChoices === dataType[questionIndex].correctChoice){
                correct.textContent = "Correct!";
            }
            else{
                wrong.textContent = "Wrong";
            }


            btn2.addEventListener("click", showQuestions);
            if(dataType[questionIndex+1].userChoices === dataType[questionIndex+1].correctChoice){
                correct.textContent = "Correct!";
                console.log(questionIndex+1);
            }
            else{
                wrong.textContent = "Wrong";
            }

            btn3.addEventListener("click", showQuestions);
            if(dataType[questionIndex+2].userChoices === dataType[questionIndex+2].correctChoice){
                correct.textContent = "Correct!";
            }
            else{
                wrong.textContent = "Wrong";
            }
               
                btn4.addEventListener("click", showQuestions);
                if(dataType[questionIndex+3].userChoices === dataType[questionIndex+3].correctChoice){
                    correct.textContent = "Correct!";
                }
                else{
                    wrong.textContent = "Wrong";
                }
        }, 1000)
     });
   

    // }
    
    // startButton();


    // for(var i = 0; i < arrayBtn.length; i++){
    //     if(dataType[i].userChoices === dataType[i].correctChoice){
    //         document.write("correct");
    //         btn2.addEventListener("click", showQuestions)
    //     }
    //     else if(dataType[i].userChoices !== dataType[i].correctChoice){
    //         btn2.addEventListener("click", showQuestions)
    //     }
    // }


    // timer = setInterval(function(){
    //     dataFunc();
        
    //         timerCount--;
    //     timerEl.textContent = timerCount;
    //     var test = document.createElement("div");
    //      test.textContent = "strings";

    //      console.log("this is dataLi1 >> " + dataLi1.textContent);
    //    console.log("this is test    >> " + test.textContent);


    //     orderDataEl.addEventListener("click", function(){
    //         if(timerCount > 0 && dataLi1.textContent === test.textContent ){
                
    //                 correctAnswer.textContent = "correct true";
    //         }
    //         else{
    //             wrongAnswer.textContent = "wrong weeye";
    //         }
    //         clearInterval(timer);
    //     })
        // curlyBracketsFunc();
        // javaArrayFunc()
        // StringValueFunc()
        // consoleLogFunc()
        
        
            
        

    // }, 1000)
    