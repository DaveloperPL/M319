var numCorrect =0;

document.getElementById("pic").addEventListener("click", test)


function test(){
        alert("hello")

}

function decrease(){

    alert("SDFLkdsjf")
}
function question1() {

    let answer = prompt("What is the name of this school");
    answer = answer.toLowerCase()
    if (answer == "conant" || answer =="conant high school") {
        alert("correct")
        numCorrect = numCorrect + 1
    } else {
        alert("wrong")
    }
    prompt("you got " + numCorrect + " correct");
}
function question2(){
    var answer = prompt("who am i")
    if (answer == "cortez"){
        alert("correct")
        numCorrect = numCorrect+1;
    }else{
        alert("wrong")
    }
}

function getText(){
    var stuff = document.getElementById("txtInput").value
    // alert(stuff)
    if (stuff ==4){
        alert("correct")
    }else{
        alert ("wrong")
    }
}