var startButtonEl = document.querySelector(".start-btn");

var launchQuiz = function(event){
    window.location.href = "quiz.html";
}

startButtonEl.addEventListener("click", launchQuiz);