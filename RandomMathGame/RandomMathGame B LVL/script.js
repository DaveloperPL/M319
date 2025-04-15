var lvl = 1
var typeMath = 0
var num1
var num2
var string
var correctnum = 0
var incorrectnum = 0
var displayed = false
var guessesnum = 0
var gate = false
var gate2 = false
var numsub = 0
var numadd = 0
var numMult = 0
var multlvl = 0

var masterAdd = false
var masterSub = false
var masterMult = false
function showDifficulty(){
    document.getElementById("Start").style.display = "none"
    document.getElementById("br1").style.display = "none"
    document.getElementById("sub").style.display = "block"
    document.getElementById("add").style.display = "block"
    if (numadd > 4 && numsub > 4){
        document.getElementById("mult").style.display = "block"
        lvl = 2

    }
    if (numsub > 9 && numadd > 9){
        lvl = 3
    }
}
function AddOrSub(type){
    typeMath = type
    document.getElementById("add").style.display = "none"
    document.getElementById("sub").style.display = "none"
    document.getElementById("mathQ").style.display = "block"
    document.getElementById("mathQ").style.display = "block"
    document.getElementById("txtBx").style.display = "block"
    document.getElementById("back").style.display = "block"
    document.getElementById("txtBx").focus()
    createQuestion()
}
function createQuestion(){
    if (lvl === 1 && (typeMath != "X" || multlvl == 2)){
        num1 = Math.floor((Math.random()*10)+1)
        num2 = Math.floor((Math.random()*10)+1)
        string = num1 + " " + typeMath + " " + num2
    }else if (lvl === 2 && (typeMath != "X" || multlvl == 3)){
        num1 = Math.floor((Math.random()*10)+10)
        num2 = Math.floor((Math.random()*10)+10)
        string = num1 + " " + typeMath + " " + num2
    }else if (lvl === 3 && typeMath != "X"){
        num1 = Math.floor((Math.random()*10)+20)
        num2 = Math.floor((Math.random()*10)+20)
        string = num1 + " " + typeMath + " " + num2
    }else if (typeMath == "X"){
        num1 = Math.floor((Math.random()*5)+1)
        num2 = Math.floor((Math.random()*5)+1)
        string = num1 + " " + typeMath + " " + num2
    }
    else {
        string = ""
    }
    document.getElementById("mathQ").innerHTML = string
    displayed = true
}
function answer(){
    guessesnum = guessesnum + 1
    document.getElementById("guesses").innerHTML = "Guesses: " + guessesnum
    const i = document.getElementById("txtBx").value;
    if (typeMath === "+" && i == num1 + num2){
        correct()
        numadd = numadd + 1
    }else if (typeMath === "-" && i == num1 - num2){
        correct()
        numsub = numsub + 1
    }else if (typeMath === "X" && i == num1 * num2){
        correct()
        numMult = numMult + 1
    }else {
        incorrectnum = incorrectnum + 1
        document.getElementById("incorrect").innerHTML = "Incorrect: " + incorrectnum
    }
    if (numadd > 4){
        document.getElementById("+").src = "badges\\Good+lvl1.png"

    }else if (numsub > 4){
        document.getElementById("-").src = "badges\\lvl1-.png"
    }else if (numMult > 4){
        document.getElementById("x").src = "badges\\lvl1x.png"
    }
    document.getElementById("addnum").innerHTML = "Addition Questions Right: " + numadd
    document.getElementById("subnum").innerHTML = "Subtraction Questions Right: " + numsub

    if (numadd > 9){
        document.getElementById("+").src = "badges\\lvl2+.png"
    }
    if (numsub > 9){
        document.getElementById("-").src = "badges\\lvl2-.png"
    }
    if (numMult > 9){
        document.getElementById("x").src = "badges\\lvl2x.png"
    }

    if (numadd > 14){
        document.getElementById("add").disabled = "true"
        document.getElementById("+").src = "badges\\lvl3+.png"
    }
    if (numsub > 14){
        document.getElementById("sub").disabled = "true"
        document.getElementById("-").src = "badges\\lvl3-.png"
    }
    if (numMult > 14){
        document.getElementById("mult").disabled = "true"
        document.getElementById("x").src = "badges\\lvl3x.png"
    }
    document.getElementById("txtBx").value = ""
}
function correct(){
    correctnum = correctnum + 1
    document.getElementById("correct").innerHTML = "Correct: " + correctnum
    createQuestion()
}
function reset() {
    document.getElementById("Start").style.display = "block"
    document.getElementById("reset").style.display = "none"
    document.getElementById("mathQ").innerHTML = ""
    document.getElementById("txtBx").value = ""
}
document.addEventListener("keypress", function (e){
    if (e.key == "Enter" && displayed == true){
        answer()
    }
});
function back(){
    document.getElementById("mathQ").style.display = "none"
    document.getElementById("submit").style.display = "none"
    document.getElementById("txtBx").style.display = "none"
    showDifficulty();
}