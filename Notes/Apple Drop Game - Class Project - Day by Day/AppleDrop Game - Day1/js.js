var score = 0;
var level = 1;
//the initialize function is run from the html when the screen loads.
function initialize() {
    //always create a background function.
    drawBackground();

}
function drawBackground(){
    var cnv = document.getElementById("myCanvas")
    var ctx = cnv.getContext("2d");
    ctx.fillStyle="#FFFFE0";	//sets the fill color (neon green)
    ctx.fillRect(0,0,cnv.width,cnv.height);
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




