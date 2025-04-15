var score = 0;
var level = 1;

//initializes the basket image with nothing in it.
var basket = new Image();
//tell the computer which image goes with the basket variable
basket.src ="resources/basketImage.jpg"
//basket x and y variables
basketX = 200;
basketY = 400;

var startScreenShow;
//the initialize function is run from the html when the screen loads.
function initialize() {
    //just call the animate loop function to start.  Can also be started from a button if wanted.
    startScreenShow = true;
    animateLoop()

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
function drawBasket(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(basket,basketX,basketY,75,75);
}
var a; //generic variable so we can stop the loop later
function animateLoop(){
    a = requestAnimationFrame(animateLoop)
    drawBackground();
    drawBasket();
    if(startScreenShow ==true){
        drawStartScreen();
    }

}
function drawStartScreen(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#FFFFE0"
    ctx.fillRect(0,0,500,500);
    ctx.fillStyle= "#ff4567";
    ctx.font = "30px Arial";
    ctx.fillText("Press the Enter Key to Start",50,250)
}
/*
this code allows you to use the keyboard.  It is written in Jquery.  Jquery is version of javascript that is downloaded
as a library.  The download line is in the header of the html.  Each of the keycodes below can be found in the
ASCII table.
 */
$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == 65 && basketX>0)
    {
        basketX-=5
    }

    if(keycode == 68 && basketX+75<500)
    {
        basketX+=5

    }
    if(keycode ==13){
        startScreenShow = false;

    }

});
