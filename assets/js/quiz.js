timer = 60
var submitButtonEl = document.querySelector(".submit-btn");
var timerContentEl = document.querySelector(".timer-content");

var buttonPressed = function(event){
    updateTimerDisplay();
    timer+=10;
}


var startQuiz = function(){
    alert("Click OK to start the quiz")
    startTimer();

}

var startTimer = function()
{
    var timerInterval = setInterval(()=>{
        console.log(timer);
        updateTimerDisplay();
        if ( timer <= 0){
            clearInterval(timerInterval);
            alert("Timer expired!")
            window.location.href = "highscores.html"; 
        }
        timer--;
    }, 1000)
}


var updateTimerDisplay =  function(){
    timerContentEl.textContent = timer;
}

startQuiz();
submitButtonEl.addEventListener("click", buttonPressed);
