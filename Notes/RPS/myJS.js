var userChoice;  //1 = rock, 2 = paper, 3 =scisors
var names = [];
var wins = 0;
var losses = 0;
var ties =0

function init(){
    // var name = prompt("What is your name");
    // names.push(name)
    // alert(names)
}
function newPlayer(){
    var name = prompt("What is your name");
    names.push(name)
}
function userRock(){
    document.getElementById("dog").src = "resources/rock.jpg"
    userChoice = 1;
    checkAnswer(userChoice,computerPlay())
}
function userPaper(){
    document.getElementById("dog").src = "resources/paper.jpg"
    userChoice = 2;
}
function userScissors(){
    document.getElementById("dog").src = "resources/scissors.jpg"
    userChoice = 3;
}

function computerPlay(){
    var compPick = Math.floor(Math.random()*3)+1
    alert(compPick)
    return compPick;
}

function checkAnswer(uc,cc){
    if( uc== cc){
        alert("tie")
    }else if(uc==1 && cc ==2){
        alert("computer wins")
        winLossTies[1]+=1;
    }else if(uc==2 && cc ==3){
        alert("computer wins")
        winLossTies[1]+=1;
    }else if(uc==3 && cc ==1){
        alert("computer wins")
        winLossTies[1]+=1;
    }else{
        alert("player wins")
        winLossTies[0]+=1;
    }
}