const Deck = [];
const Player = [];
const Comp1 = [];
const Comp2 = [];
let numInDeck = false;
const Points = [0, 0, 0];
const cardPaths = ["c2.jpg", "c3.jpg", "c4.jpg", "c5.jpg", "c6.jpg", "c7.jpg", "c8.jpg", "c9.jpg", "c10.jpg", "c11.jpg", "c12.jpg", "c13.jpg"];
const playerImgs = ["c1p", "c2p", "c3p", "c4p", "c5p", "c6p", "c7p", "c8p", "c9p", "c10p", "c11p", "c12p"];
const comp1Imgs = ["c1c1", "c2c1", "c3c1", "c4c1", "c5c1", "c6c1", "c7c1", "c8c1", "c9c1", "c10c1", "c11c1", "c12c1"];
const comp2Imgs = ["c1c2", "c2c2", "c3c2", "c4c2", "c5c2", "c6c2", "c7c2", "c8c2", "c9c2", "c10c1", "c11c1", "c12c1"];
const memory = []

function endGame(){
    for (let i=1; i<7; i++){
        document.getElementById(i).disabled = "true"
    }
    document.getElementById("playAgain").disabled = ""
}

function playAgain(){
    for (let i=1; i<7; i++){
        document.getElementById(i).disabled = ""
    }
    document.getElementById("playAgain").disabled = "true"
    Deck.splice(0,Deck.length)
    Player.splice(0,Player.length)
    Comp1.splice(0,Comp1.length)
    Comp2.splice(0,Comp2.length)
    Load()
}

function checkIfEmpty(){
    if (Comp1.length === 0 && Deck.length === 0){
        endGame()
    }else if (Comp1.length === 0){
        Comp1.push(Deck[0])
        Deck.shift()
    }
    if (Comp2.length === 0 && Deck.length === 0){
        endGame()
    }else if (Comp2.length === 0){
        Comp2.push(Deck[0])
        Deck.shift()
    }
    if (Player.length === 0 && Deck.length === 0){
        endGame()
    }else if (Player.length === 0){
        Player.push(Deck[0])
        Deck.shift()
    }
}
function imgs(){
    for (let i=0; i<12; i++){
        document.getElementById(playerImgs[i]).src = ""
        document.getElementById(comp1Imgs[i]).src = ""
        document.getElementById(comp2Imgs[i]).src = ""
    }
    for (let i=0;i<12;i++){
        for (let j=0;j<12;j++){
            if (Player[i] === j+2){
                document.getElementById(playerImgs[i]).src = "Images/" + cardPaths[j]
            }else if (Player[i] === "J"){
                document.getElementById(playerImgs[i]).src = "Images/" + cardPaths[9]
            }else if (Player[i] === "Q"){
                document.getElementById(playerImgs[i]).src = "Images/" + cardPaths[10]
            }else if (Player[i] === "K"){
                document.getElementById(playerImgs[i]).src = "Images/" + cardPaths[11]
            }
            if (Comp1[i] === j+2){
                document.getElementById(comp1Imgs[i]).src = "Images/" + cardPaths[j]
            }else if (Comp1[i] === "J"){
                document.getElementById(comp1Imgs[i]).src = "Images/" + cardPaths[9]
            }else if (Comp1[i] === "Q"){
                document.getElementById(comp1Imgs[i]).src = "Images/" + cardPaths[10]
            }else if (Comp1[i] === "K"){
                document.getElementById(comp1Imgs[i]).src = "Images/" + cardPaths[11]
            }
            if (Comp2[i] === j+2){
                document.getElementById(comp2Imgs[i]).src = "Images/" + cardPaths[j]
            }else if (Comp2[i] === "J"){
                document.getElementById(comp2Imgs[i]).src = "Images/" + cardPaths[9]
            }else if (Comp2[i] === "Q"){
                document.getElementById(comp2Imgs[i]).src = "Images/" + cardPaths[10]
            }else if (Comp2[i] === "K"){
                document.getElementById(comp2Imgs[i]).src = "Images/" + cardPaths[11]
            }
        }
    }
}

function Load(){
    document.getElementById("Player").innerHTML = "Player: " + Player
    document.getElementById("Comp1").innerHTML = "Comp1: " + Comp1
    document.getElementById("Comp2").innerHTML = "Comp2: " + Comp2
    document.getElementById("p").innerHTML = Deck
    document.getElementById("PlayerPT").innerHTML = "Player: " + Points[0]
    document.getElementById("Comp1PT").innerHTML = "Comp1: " + Points[1]
    document.getElementById("Comp2PT").innerHTML = "Comp2: " + Points[2]
    imgs()
}

function Pairs(){
    Player.sort()
    Comp1.sort()
    Comp2.sort()
    for (let i=0; i<Comp1.length-1; i++) {
        if (Comp1[i].toString() === Comp1[i + 1].toString()) {
            Points[1] = Points[1] + 1
            Comp1.splice(i, 2)
            i = i-1
        }
    }
    for (let i=0; i<Comp2.length-1; i++) {
        if (Comp2[i].toString() === Comp2[i + 1].toString()) {
            Points[2] = Points[2] + 1
            Comp2.splice(i, 2)
            i = i-1
        }
    }
    for (let i=0; i<Player.length-1; i++){
        if (Player[i].toString() === Player[i+1].toString()){
            Points[0] = Points[0] + 1
            Player.splice(i, 2)
            i = i-1
        }
    }
    Load()
}

function CreateDeck(){
    for (let i=0; i < 4; i++){
        for (let j=2; j < 14; j++){
            if (j < 11){
                Deck.push(j)
            }
            if (j === 11){
                Deck.push("J")
            }
            if (j === 12){
                Deck.push("Q")
            }
            if (j === 13){
                Deck.push("K")
            }
        }
    }
    Load()
    document.getElementById("1").disabled = "true"
}
function ShuffleDeck(){
    for (let i=0; i < 1000000; i++){
        const num1 = Math.floor((Math.random() * Deck.length));
        let num2 = Math.floor((Math.random() * Deck.length));
        const temp = Deck[num1];
        Deck[num1] = Deck[num2]
        Deck[num2] = temp
    }
    Load()
}
function Deal(){
    for (let i=0; i < 5; i++){
        Player[i] = Deck[0]
        Player[i].toString()
        Deck.shift()
        Comp1[i] = Deck[0]
        Comp1[i].toString()
        Deck.shift()
        Comp2[i] = Deck[0]
        Comp2[i].toString()
        Deck.shift()
    }
    Load()
    imgs()
    Pairs()
    document.getElementById("3").disabled = "true"
}
function Ask(){
    let num = prompt("What number would you like to get?");
    let isTrue = false;
    let isTrue2 = false;
    for (let i=0; i < Player.length; i++){
        if (num.toString().toUpperCase() === Player[i].toString()){
            numInDeck = true
        }
    }
    if (numInDeck === true){
        for (let i=0; i < Comp1.length; i++){
            if (num.toString().toUpperCase() === Comp1[i].toString()){
                isTrue = true
                Comp1.splice(i, 1)
                Player.push(num.toUpperCase())
            }
        }
        if (isTrue === false){
            for (let i=0; i < Comp2.length; i++){
                if (num.toString().toUpperCase() === Comp2[i].toString()){
                    Comp2.splice(i, 1)
                    Player.push(num.toUpperCase())
                    isTrue2 = true
                }
            }
        }
        if (isTrue === false && isTrue2 === false){
            Player.push(Deck[0])
            Deck.shift()
            memory.push(num)
        }
        Pairs()
    }else{
        alert("Make sure to choose a num inside your deck!")
        numInDeck = false
    }
    checkIfEmpty()
    Load()
}
function Comp1Turn(){
    let RnumMatch = false;
    let rnum = Math.floor((Math.random() * 12) + 2);
    for (let j=0;j<Comp1.length;j++){
        for (let i=0; i<memory.length; i++){
            if (memory[i] === Comp1[j]){
                rnum = memory[i]
                memory.splice(i,1)
                RnumMatch = true
            }
        }
    }
    while (RnumMatch === false){
        for (let i=0;i<Comp1.length;i++){
            if (Comp1[i].toString()===rnum.toString() || (rnum === 13 && Comp1[i].toString() === "K") || (rnum === 12 && Comp1[i].toString() === "Q") || (rnum === 11 && Comp1[i].toString() === "J")){
                RnumMatch = true
            }
            // REPLACE WITH OR's AND FIX THE REST OF THE MATCH CHECKING FOR JOKERS, QUEENS, AND KINGS FOR THE REST OF COMP1 AND COMP2 MAKE SURE PAIRS ALSO WORKS
        }
        if (RnumMatch === false){
            rnum = Math.floor((Math.random() * 12) + 2);
        }
    }
    let isTrue = false;
    let isTrue2 = false;
    for (let i=0; i < Comp2.length; i++){
        if (rnum.toString() === Comp2[i].toString()){
            isTrue = true
            Comp2.splice(i, 1)
            Comp1.push(rnum)
        }
    }
    if (isTrue === false){
        for (let i=0; i < Player.length; i++){
            if (rnum.toString() === Player[i].toString()){
                Player.splice(i, 1)
                Comp1.push(rnum)
                isTrue2 = true
            }
        }
    }
    if (isTrue === false && isTrue2 === false){
        Comp1.push(Deck[0])
        Deck.shift()
    }
    Pairs()
    checkIfEmpty()
    Load()
}
function Comp2Turn(){
    let RnumMatch = false;
    let rnum = Math.floor((Math.random() * 12) + 2);
    for (let j=0;j<Comp2.length;j++){
        for (let i=0; i<memory.length; i++){
            if (memory[i] === Comp2[j]){
                rnum = memory[i]
                memory.splice(i,1)
                RnumMatch = true
            }
        }
    }
    while (RnumMatch === false){
        for (let i=0;i<Comp2.length;i++){
            if (Comp2[i].toString()===rnum.toString() || (rnum === 13 && Comp2[i].toString() === "K") || (rnum === 12 && Comp2[i].toString() === "Q") || (rnum === 11 && Comp2[i].toString() === "J")){
                RnumMatch = true
            }
            // REPLACE WITH OR's AND FIX THE REST OF THE MATCH CHECKING FOR JOKERS, QUEENS, AND KINGS FOR THE REST OF COMP1 AND COMP2 MAKE SURE PAIRS ALSO WORKS
        }
        if (RnumMatch === false){
            rnum = Math.floor((Math.random() * 12) + 2);
        }
    }
    let isTrue = false;
    let isTrue2 = false;
    for (let i=0; i < Comp1.length; i++){
        if (rnum.toString() === Comp1[i].toString()){
            isTrue = true
            Comp1.splice(i, 1)
            Comp2.push(rnum)
        }
    }
    if (isTrue === false){
        for (let i=0; i < Player.length; i++){
            if (rnum.toString() === Player[i].toString()){
                Player.splice(i, 1)
                Comp2.push(rnum)
                isTrue2 = true
            }
        }
    }
    if (isTrue === false && isTrue2 === false){
        Comp2.push(Deck[0])
        Deck.shift()
    }
    Pairs()
    checkIfEmpty()
    Load()
}