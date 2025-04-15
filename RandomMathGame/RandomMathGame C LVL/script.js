var lvl = 0
var typeMath = 0
var num1
var num2
var string
function showDifficulty(){
    document.getElementById("Start").style.display = "none"
    document.getElementById("br1").style.display = "none"
    document.getElementById("easy").style.display = "block"
    document.getElementById("medium").style.display = "block"
    document.getElementById("hard").style.display = "block"
}
function selectDifficulty(level){
    lvl = level
    document.getElementById("sub").style.display = "block"
    document.getElementById("add").style.display = "block"
}
function AddOrSub(type){
    typeMath = type
    document.getElementById("easy").style.display = "none"
    document.getElementById("medium").style.display = "none"
    document.getElementById("hard").style.display = "none"
    document.getElementById("add").style.display = "none"
    document.getElementById("sub").style.display = "none"
    document.getElementById("mathQ").style.display = "block"
    document.getElementById("question").style.display = "block"
    document.getElementById("submit").style.display = "block"
    document.getElementById("txtBx").style.display = "block"
}
function createQuestion(){
    if (lvl == 1){
        num1 = Math.floor((Math.random()*10)+1)
        num2 = Math.floor((Math.random()*10)+1)
        string = num1 + " " + typeMath + " " + num2
    }else if (lvl == 2){
        num1 = Math.floor((Math.random()*10)+10)
        num2 = Math.floor((Math.random()*10)+10)
        string = num1 + " " + typeMath + " " + num2
    }else if (lvl == 3){
        num1 = Math.floor((Math.random()*10)+20)
        num2 = Math.floor((Math.random()*10)+20)
        string = num1 + " " + typeMath + " " + num2
    }else {
        string = ""
    }
    document.getElementById("mathQ").innerHTML = string
}
function answer(){
    var i = document.getElementById("txtBx").value
    if (typeMath == "+" & i == num1 + num2){
        correct()
    }
    if (typeMath == "-" & i == num1 - num2){
        correct()
    }
}
function correct(){
    document.getElementById("reset").style.display = "block"
    document.getElementById("mathQ").style.display = "none"
    document.getElementById("question").style.display = "none"
    document.getElementById("submit").style.display = "none"
    document.getElementById("txtBx").style.display = "none"
    document.getElementById("p1").style.color = "Green"
    document.getElementById("p1").innerHTML = "Correct!"
    document.getElementById("p1").style.display = "block"
}

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter" & num1 != 0) {
        event.preventDefault();
        answer()
    }
});
function hide(){
    document.getElementById("reset").style.display = "none"
    document.getElementById("p1").style.display = "none"
    document.getElementById("start").style.display = "block"
}