var lvl = 1
var typeMath = 0
var num1
var num2
var num3
var string
var correctnum = 0
var incorrectnum = 0
var displayed = false
var guessesnum = 0
var gate = false
var gate2 = false
var numsub = 0
var numadd = 0
var numXadd = 0
var numXsub = 0
var numXmult = 0
var numMult = 0
var multlvl = 0
var rnum = 0
var opperation1 = ""
var opperation2 = ""
var mixedNum
var Name1

var masterAdd = false
var masterSub = false
var masterMult = false

function showDifficulty(){
    document.getElementById("mult").disabled = "true"
    document.getElementById("mix").disabled = "true"
    document.getElementById("Start").style.display = "none"
    document.getElementById("Multiplayer").style.display = "none"
    document.getElementById("br1").style.display = "none"
    document.getElementById("sub").style.display = "inline-block"
    document.getElementById("add").style.display = "inline-block"
    document.getElementById("mult").style.display = "inline-block"
    document.getElementById("mix").style.display = "inline-block"
    if (numadd > 4 && numsub > 4){
        document.getElementById("mult").disabled = !document.getElementById("mult").disabled
        lvl = 2
    }
    if (numsub > 9 && numadd > 9){
        lvl = 3
        document.getElementById("mix").disabled = !document.getElementById("mix").disabled
    }
}
function AddOrSub(type){
    typeMath = type
    document.getElementById("add").style.display = "none"
    document.getElementById("sub").style.display = "none"
    document.getElementById("mix").style.display = "none"
    document.getElementById("mult").style.display = "none"
    document.getElementById("mathQ").style.display = "block"
    document.getElementById("txtBx").style.display = "block"
    document.getElementById("back").style.display = "block"
    document.getElementById("txtBx").focus()
    createQuestion()
}
function createQuestion(){
    if (lvl === 1 && typeMath != "X+-" && (typeMath != "X" || multlvl == 2)){
        num1 = Math.floor((Math.random()*10)+1)
        num2 = Math.floor((Math.random()*10)+1)
        string = num1 + " " + typeMath + " " + num2
    }else if (lvl === 2 && typeMath != "X+-" && (typeMath != "X" || multlvl == 3)){
        num1 = Math.floor((Math.random()*10)+10)
        num2 = Math.floor((Math.random()*10)+10)
        string = num1 + " " + typeMath + " " + num2
    }else if (lvl === 3 && typeMath != "X+-" && typeMath != "X"){
        num1 = Math.floor((Math.random()*10)+20)
        num2 = Math.floor((Math.random()*10)+20)
        string = num1 + " " + typeMath + " " + num2
    }else if (typeMath == "X"){
        num1 = Math.floor((Math.random()*5)+1)
        num2 = Math.floor((Math.random()*5)+1)
        string = num1 + " " + typeMath + " " + num2
    }else if (typeMath == "X+-"){
        createQ(1)
    }
    else {
        string = ""
    }
    document.getElementById("mathQ").innerHTML = string
    displayed = true
}
function createQ(nums){
    num1 = Math.floor((Math.random()*5)+1)
    num2 = Math.floor((Math.random()*5)+1)
    num3 = Math.floor((Math.random()*5)+1)
    if (mixedNum > 4 && mixedNum < 10 && nums == 1){
        num1 = num1 * 2
        num2 = num2 * 2
        num3 = num3 * 2
    }
    if (mixedNum > 9 && nums == 1){
        num1 = num1 * 3
        num2 = num2 * 3
        num3 = num3 * 3
    }
    if (nums == 2){
        num1 = Math.floor((Math.random()*10)+1)
        num2 = Math.floor((Math.random()*10)+1)
        num3 = Math.floor((Math.random()*10)+1)
    }
    rnum = Math.floor((Math.random()*3)+1)
    if (rnum == "3"){
        opperation1 = " X "
    }else if (rnum == "2"){
        opperation1 = " + "
    }else if (rnum == "1"){
        opperation1 = " - "
    }
    rnum = Math.floor((Math.random()*3+1))
    if (rnum == "3"){
        opperation2 = " X "
    }else if (rnum == "2"){
        opperation2 = " + "
    }else if (rnum == "1"){
        opperation2 = " - "
    }
    string = num1 + opperation1 + num2 + opperation2 + num3
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
    }else if (typeMath === "X+-"){
        if (checkans() == i){
            correct()
            mixedNum = mixedNum + 1
        }
    }else {
        incorrectnum = incorrectnum + 1
        if (typeMath == "-"){
            numXsub = numXsub + 1
        }
        if (typeMath == "+"){
            numXadd = numXadd + 1
        }
        if (typeMath == "X"){
            numXmult = numXmult + 1
        }
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
    if (numMult > 9) {
        document.getElementById("x").src = "badges\\lvl2x.png"
    }
    if (numadd > 14){
        document.getElementById("add").disabled = "true"
        document.getElementById("+").src = "badges\\lvl3+.png"
        if (numXadd < 1){
            document.getElementById("+").src = "badges\\lvl4+.png"
        }

    }
    if (numsub > 14){
        document.getElementById("sub").disabled = "true"
        document.getElementById("-").src = "badges\\lvl3-.png"
        if (numXsub < 1){
            document.getElementById("-").src = "badges\\lvl4-.png"
        }
    }
    if (numMult > 14){
        document.getElementById("mult").disabled = "true"
        document.getElementById("x").src = "badges\\lvl3x.png"
        if (numXmult < 1){
            document.getElementById("x").src = "badges\\lvl4x.png"
        }
    }
    if (mixedNum > 4){
        document.getElementById("x+-").src = "lvl1X+-"
        if (mixedNum > 9){
            document.getElementById("x+-").src = "lvl2X+-"
            if (mixedNum > 14){
                document.getElementById("x+-").src = "lvl3X+-"
            }
        }
    }
    document.getElementById("txtBx").value = ""
    if (numadd > 4 && numsub > 4){
        document.getElementById("mult").disabled = !document.getElementById("mult").disabled
        lvl = 2
    }
    if (numsub > 9 && numadd > 9){
        lvl = 3
        document.getElementById("mix").disabled = !document.getElementById("mix").disabled
    }
}
function checkans(){
    if (opperation1 == " X "){
        var x = num1 * num2
        if (opperation2 == " + "){
            x = x + num3
        }else if (opperation2 == " X "){
            x = x * num3
        } else{
            x = x - num3
        }
    }
    if (opperation1 == " + "){
        var x = num1 + num2
        if (opperation2 == " + "){
            x = x + num3
        }else if (opperation2 == " X "){
            x = x * num3
        } else {
            x = x - num3
        }
    }
    if (opperation1 == " - "){
        var x = num1 - num2
        if (opperation2 == " + "){
            x = x + num3
        }else if (opperation2 == " X "){
            x = x * num3
        } else{
            x = x - num3
        }
    }
    return x
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
// Page 2

var name1
var name2
var turn = true
var point1 = 0
var point2 = 0

function names(){
    name1 = document.getElementById("int1").value
    name2 = document.getElementById("int2").value
    document.getElementById("name1").innerHTML = name1
    document.getElementById("name2").innerHTML = name2
    document.getElementById("welcome").style.display = "none"
    document.getElementById("int2").style.display = "none"
    document.getElementById("int1").style.display = "none"
    document.getElementById("btn1").style.display = "none"
    questions()
}
function questions(){
    if (turn == true){
        document.getElementById("name1").style.background = "red"
        document.getElementById("name2").style.background = ""
    }else{
        document.getElementById("name2").style.background = "red"
        document.getElementById("name1").style.background = ""
    }
    createQ(2)
    document.getElementById("mathQ").innerHTML = string
}
function answerQ(){
    if (checkans() == document.getElementById("txtBx").value){
        if (turn == true){
            point1 = point1 + 1
            turn = false
            document.getElementById("pt1").innerHTML = "Points: " + point1
        }else if (turn == false){
            point2 = point2 + 1
            turn = true
            document.getElementById("pt2").innerHTML = "Points: " + point2
        }
    }
    if (turn == true) {
        turn = false
    }else {
        turn = true
    }
    questions()
}