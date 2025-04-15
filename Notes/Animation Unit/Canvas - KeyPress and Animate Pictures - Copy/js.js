var rectX = 50;
var rectY = 50;

var a;
var koala = new Image();
koala.src = "resources/Koala.jpg";
var kX = 100;
var kY =100;

//the initialize function is run from the html when the screen loads.
function initialize() {
    //always create a background function.  this function will be drawn every time a new frame is animated to restet
    //the canvas
    drawBackground();
    var ctx = document.getElementById("myCanvas").getContext("2d");
    // ctx.fillStyle = "#ff0000";
    // ctx.fillRect(rectX,rectY,50,50);
    drawRectangle()
    animate()

}
//this function simply starts the animation.  It can be done in a button, or another piece of code.
function startAnimation() {
    animate()

}
//this allows the user to stop the animation.
function stopAnimation() {
    cancelAnimationFrame(a)
}
//all functions in this method will run at the speed of your computers frame rate
//first line must stay where it is.
//background is recommended to be second.
//next comes the functions in the order you want to draw them or run things like checking for collisions.
function animate(){
    a=requestAnimationFrame(animate)
    drawBackground()
    drawRectangle()
    drawKoala()
}

function drawKoala(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(koala,kX,kY,50,50);
    // kY+=5;
    // kX+=5
    // if(kY>=500){
    //     kY = -50
    // }

}
function drawRectangle(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#ff0000";
    rectX = rectX+5
    if(rectX>=500){
        rectX = -50
    }
    ctx.fillRect(rectX,rectY,50,50);
}

function drawBackground(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
}
// this code allows you to use the keyboard.  It is written in Jquery.  Jquery is version of javascript that is downloaded
// as a library.  The download line is in the header of the html.  Each of the keycodes below can be found in the
// ASCII table.
//
$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == 65 && kX>0)
    {
        kX= kX-5;

    }
    if(keycode == 68 && kX<500-50)
    {
        kX=kX+5
    }
    if(keycode ==13){
        alert("hello")

    }

});