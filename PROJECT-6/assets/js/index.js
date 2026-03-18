let questions = [
{
q:"Which gas is the lightest?",
options:["Hydrogen","Helium","Ammonia","Oxygen"],
answer:0
},
{
q:"Capital of India?",
options:["Delhi","Mumbai","Kolkata","Chennai"],
answer:0
},
{
q:"2 + 5 = ?",
options:["5","6","7","8"],
answer:2
},
{
q:"HTML stands for?",
options:["Hyper Text Markup Language","High Text Machine","Hyper Tool","None"],
answer:0
},
{
q:"CSS is used for?",
options:["Styling","Programming","Database","Server"],
answer:0
},
{
q:"Which language runs in browser?",
options:["Java","Python","JavaScript","C++"],
answer:2
},
{
q:"Which tag for image?",
options:["img","image","pic","src"],
answer:0
},
{
q:"Array symbol?",
options:["{}","()","[]","<>"],
answer:2
},
{
q:"JS created by?",
options:["Microsoft","Netscape","Google","Apple"],
answer:1
},
{
q:"console output method?",
options:["console.log()","print()","log.console()","write.console()"],
answer:0
}
]

let index = 0
let score = 0
let answered = false
let timer
let timeLeft = 10


// START QUIZ + COUNTDOWN
function startQuiz(){

let name = document.getElementById("username").value

if(name == ""){
document.getElementById("error").innerText="Enter your name"
return
}

// hide welcome
document.getElementById("welcomeBox").classList.add("hidden")

// show countdown
document.getElementById("countdownBox").classList.remove("hidden")

let count = 3

let countdown = setInterval(function(){

document.getElementById("count").innerText = count

count--

if(count < 0){
clearInterval(countdown)

document.getElementById("countdownBox").classList.add("hidden")
document.getElementById("quizBox").classList.remove("hidden")

loadQuestion()
}

},1000)

}


// LOAD QUESTION
function loadQuestion(){

answered = false

let q = questions[index]

document.getElementById("question").innerText = q.q
document.getElementById("opt0").innerText = q.options[0]
document.getElementById("opt1").innerText = q.options[1]
document.getElementById("opt2").innerText = q.options[2]
document.getElementById("opt3").innerText = q.options[3]

// reset buttons
let buttons = document.querySelectorAll(".options button")

buttons.forEach(btn=>{
btn.disabled=false
btn.classList.remove("correct")
btn.classList.remove("wrong")
})

// start timer
startTimer()

}


// TIMER FIXED
function startTimer(){

clearInterval(timer) // IMPORTANT FIX

timeLeft = 10
document.getElementById("timer").innerText = timeLeft

timer = setInterval(function(){

timeLeft--
document.getElementById("timer").innerText = timeLeft

if(timeLeft <= 0){
clearInterval(timer)

// auto move next
index++

if(index >= questions.length){
showResult()
}else{
loadQuestion()
}

}

},1000)

}


// CHECK ANSWER
function checkAnswer(option){

if(answered) return

answered = true
clearInterval(timer)

let correct = questions[index].answer
let buttons = document.querySelectorAll(".options button")

buttons.forEach(btn=>{
btn.disabled = true
})

if(option == correct){
buttons[option].classList.add("correct")
score++
}else{
buttons[option].classList.add("wrong")
buttons[correct].classList.add("correct")
}

}


// NEXT BUTTON
function nextQuestion(){

clearInterval(timer) // IMPORTANT

index++

if(index >= questions.length){
showResult()
}else{
loadQuestion()
}

}


// RESULT
function showResult(){

document.getElementById("quizBox").classList.add("hidden")
document.getElementById("resultBox").classList.remove("hidden")

let result = score >= 5 ? "You Passed 🎉" : "You Failed ❌"

document.getElementById("resultText").innerText = result
document.getElementById("scoreText").innerText = "Score: " + score + "/10"

}