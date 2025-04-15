var score = 0;
var level = 1;

function init(){
    drawBackground()
}

function drawBackground(){
    var cnv = document.getElementById("myCanvas")
    var ctx = cnv.getContext("2d");
    ctx.fillStyle="#FFFFE0"
    ctx.fillRect(0,0,cnv.width,cnv.height)
    ctx.fillStyle = "#90EE90";
    ctx.fillRect(0,cnv.height-50,cnv.width,50)
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,cnv.width,75)
    ctx.font = "18px Arial";
    ctx.fillStyle= "#FFFFFF";
    ctx.fillText("Apple Drop", 200,20);
    ctx.fillText("Score = " + score, 0,40);
    ctx.fillText("Level = " + level, 0,60);
}