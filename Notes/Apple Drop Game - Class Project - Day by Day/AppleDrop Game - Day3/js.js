var score = 0;
var level = 1;

//initializes the basket image with nothing in it.
var basket = new Image();
//tell the computer which image goes with the basket variable
basket.src ="resources/basketImage.jpg"
//basket x and y variables
basketX = 200;
basketY = 400;
//booleans for basket movement
var leftMove = false
var rightMove = false;


//for the apple we will use a new technique with objects.  See the create image function at the bottom.
//we will create this image in the initialize function.
var apple = new Image();
apple.src ="resources/apple.jpg";


var startScreenShow;
//the initialize function is run from the html when the screen loads.
function initialize() {

    var ctx = document.getElementById("myCanvas").getContext("2d");

    apple = createImage(apple.src,Math.floor(Math.random()*400),50,25,25,true)

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
    if (leftMove == true){
        basketX-=2
    }
    if(rightMove == true){
        basketX+=2
    }
    if(basketX<0 || basketX+75 >500){
        leftMove = false
        rightMove = false
    }
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(basket,basketX,basketY,75,75);
}
function drawApple(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(apple,apple.xLoc,apple.yLoc,25,25);
    apple.yLoc+=5
    if(apple.yLoc >500){
        apple.xLoc = Math.floor(Math.random()*400)
        apple.yLoc = -10
    }
}
var a; //generic variable so we can stop the loop later
function animateLoop(){
    a = requestAnimationFrame(animateLoop)
    drawBackground();

    if(startScreenShow ==true){
        drawStartScreen();
    }else{
        drawBasket();
        drawApple();
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
        leftMove = true
        rightMove= false

    }
    if(keycode == 68 && basketX+75<500)
    {
        rightMove = true
        leftMove = false

    }
    if(keycode ==13){
        startScreenShow = false;

    }

});
//It is not necessary to understand how to make this code from scratch.
//For Now just understand its uses.
var createImage = function(src, xLoc,yLoc,width,height,visible) {
    var img   = new Image();
    img.src   = src;
    img.xLoc = xLoc;
    img.yLoc = yLoc;
    img.width = width;
    img.height = height;
    img.visible = visible
    return img;
};