var userChoice;  //1 = rock, 2 = paper, 3 =scissors
var names = [];
var percentWins= [];
var wins = [];
var losses = [];
var ties =[]
var currentPlayer;
//temp variable
var pw;  //represents percentwins for a player

//Step 1:  Make arrays
// Step 2: Add a zero to each array when you make a new player, just like you added a name
//Step 3:  change ties=ties+1 to ties[.....] = ties[...] +1, use the currentPlayer variable
function init(){
    // var name = prompt("What is your name");
    // names.push(name)
    // alert(names)
}
function newPlayer(){
    var name = prompt("What is your name");
    name = name.toUpperCase()
    var addName = true;
    for(i=0;i<name.length;i++){
        if(names[i]==name){
            addName =false
            //I know i represents where in the array the returning player is
            //store i into another global variable to use later
            currentPlayer = i;
        }
    }
    if(addName==true){
        alert("welcome to the game")
        names.push(name)
        ties.push(0)
        wins.push(0)
        losses.push(0)
        //make code that adds a new 0 to the percentWins array
        //store length-1 of the array into teh same variable from above that represents
        //where the player is
        currentPlayer = names.length-1
        //add name as an option to a select
    }else{
        alert("welcome back " + name)

    }

}
function userRock(){
    document.getElementById("player").src = "resources/rock.jpg"
    userChoice = 1; //userChoice = "rock"
    //random number here if you want for the computer
    //do a bunch of if thens to see who wins
    checkAnswer(userChoice,computerPlay())
}
function userPaper(){
    document.getElementById("player").src = "resources/paper.jpg"
    userChoice = 2;
    checkAnswer(userChoice,computerPlay())
}
function userScissors(){
    document.getElementById("player").src = "resources/scissors.jpg"
    userChoice = 3;
    checkAnswer(userChoice,computerPlay())
}

function computerPlay(){
    var compPick = Math.floor(Math.random()*3)+1
    if(compPick==1){
        document.getElementById("computer").src = "resources/rock.jpg"
    }else if(compPick==2){
        document.getElementById("computer").src = "resources/paper.jpg"
    }else{
        document.getElementById("computer").src = "resources/scissors.jpg"
    }
    // alert(compPick)
    return compPick;
}

function checkAnswer(uc,cc){
    if( uc== cc){
        alert("tie")
        ties[currentPlayer]+=1
    }else if(uc==1 && cc ==2){
        alert("computer wins")
        losses[currentPlayer]+=1
    }else if(uc==2 && cc ==3){
        alert("computer wins")
        losses[currentPlayer]+=1
    }else if(uc==3 && cc ==1){
        alert("computer wins")
        losses[currentPlayer]+=1
    }else{
        alert("player wins")
        wins[currentPlayer]+=1
    }
    //wins/(wins+losses+ties)
    // pw = wins/(wins+ties+losses)
    var percentWinCurrentPlayer = wins[currentPlayer]/(wins[currentPlayer]+ties[currentPlayer]+losses[currentPlayer]);
    // alert(pw)
    percentWins[currentPlayer] = percentWinCurrentPlayer;
    document.getElementById("display").innerHTML = names[currentPlayer] + " your percent wins is " + percentWins[currentPlayer]
    //put pw into the array of percentwins where ever the current player is
    //this is the i that you stored earlier
}