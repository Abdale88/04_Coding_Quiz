var score = document.querySelector(".score-text");
var timerEl = document.querySelector(".time");
var startBtn = document.querySelector(".start-btn");

var btn1 = document.querySelector(".btn-1");
var btn2 = document.querySelector(".btn-2");
var btn3 = document.querySelector(".btn-3");
var btn4 = document.querySelector(".btn-4");

var btn11 = document.querySelector(".btn-11");
var btn22 = document.querySelector(".btn-22");
var btn33 = document.querySelector(".btn-33");
var btn44 = document.querySelector(".btn-44");



var questionEl = document.querySelector(".question");
var questionEl2 = document.querySelector(".question2")


// var timerCount = 10
// var timer;
var questionIndex = 0;


var arrayBtn = [btn1, btn2, btn3, btn4];
var arrayBtn2 =[btn11, btn22, btn33, btn44];


var dataType = [
    {
    question: "commonly used data types DO NOT include:",
    userChoices: ["strings", "booleans", "alert", "numbers"],
    correctChoice: 2,
    },
    
]

var datatype2 = [{
    question2: "commonly used data types DO NOT include:",
    userChoices2: ["some", "thing", "alert", "numbers"],
    correctChoice: 2,
},
]

console.log( dataType);
console.log(datatype2);

// create a function to get and show questions
//then in the function, we set questionEl.textcontent = datatype[questionIndex].question
//then create a for loop that loops through arraybtn
//insde the for loop we set arraybtn[i].textcontent = datatype[questionIndex].userchoice[i]

function showQuestions(){
    questionEl.textContent = dataType[questionIndex].question;
    
    for(var i = 0; i < arrayBtn.length; i++){
        arrayBtn[i].textContent = dataType[questionIndex].userChoices[i]; 
    }       

}
showQuestions();
function anotherFunc(){
    questionEl2.textContent = datatype2[questionIndex].question2;

    for(var i = 0; i < arrayBtn2.length; i++){
        arrayBtn2[i].textContent = datatype2[questionIndex].userChoices2[i]; 
    }  
}

anotherFunc();


function startButton(){
    arrayBtn.addEventListener("click", function(){
        
       
     });
    }
    
    startButton();


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
    