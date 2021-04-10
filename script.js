var score = document.querySelector(".score-text");
var timerEl = document.querySelector(".time");
var startBtn = document.querySelector(".start-btn");

var btn1 = document.querySelector(".btn-1");
var btn2 = document.querySelector(".btn-2");
var btn3 = document.querySelector(".btn-3");
var btn4 = document.querySelector(".btn-4");


var questionEl = document.querySelector(".question");

var questionIndex = 0;
var arrayBtn = [btn1, btn2, btn3, btn4];

var dataType = [
    {
    question: "commonly used data types DO NOT include:",
    userChoices: ["strings", "booleans", "alert", "numbers"],
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
showQuestions();



// create a function to get and show questions
//then in the function, we set questionEl.textcontent = datatype[questionIndex].question
//then create a for loop that loops through arraybtn
//insde the for loop we set arraybtn[i].textcontent = datatype[questionIndex].userchoice[i]




// function startButton(){
//     arrayBtn.addEventListener("click", function(){
        
       
//      });
//     }
    
//     startButton();


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
    