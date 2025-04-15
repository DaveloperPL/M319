/*
The first thing you will notice is that there is a resources folder in this project.
This folder isn't completely necessary, but is great to contain any extra materials that your project needs.
 */

/*
Typically it is a good idea to have 1 main function that runs all of your other functions when dealing
in HTML5 Canvas.  This will make it easier to abstract your code and to keep yourself organized.
If you have global variables that need to be declared, these can either be done at the top or above the
function where you use them.
 */
function drawStuff() {
    //change the order of the two statements below.  Notice how the second is painted on the first.
    //it is important to realize that when using the canvas, the order in which you draw things matters.
    //Once something is drawn on top, the only way to get the shape back is to draw it again.
    //Try reordering the code to see what happens.
    //Each function demonstrates how to draw something on the screen.
    drawImage()
    drawCircles();
    drawRects();
    drawLines();
    drawText();
    drawTriangle()


}
function drawRects(){
    //The first two lines of code are necessary for each function.  They define your canvas so you can
    //draw on it.  It is possible to combine it into one line or make it global if you wish.
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF00aa";
    ctx.fillRect(0,0,50,50);
}
function drawCircles() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();

    ctx.arc(50,50,60,0,360);
    ctx.fillStyle = "#bbFF00";
    ctx.fill();
    ctx.stroke();
}

function drawLines() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(50,50);
    ctx.lineWidth=5;
    ctx.lineTo(300,250);
    ctx.strokeStyle = "#0000FF";
    ctx.stroke();
}

function drawText() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle= "#ff4567";
    ctx.font = "30px Arial";
    ctx.fillText("blah blah blah", 20,100);
}

function drawTriangle(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    //This line sets the color of the triangle.
    ctx.fillStyle = '#f00';
    //next you simply draw three connected lines.
    ctx.beginPath();
    ctx.moveTo(200, 300);
    ctx.lineTo(300,100);
    ctx.lineTo(100, 200);
    ctx.lineTo(200, 300);
    ctx.closePath();
    //stroke draws the 3 lines.
    ctx.stroke()
    //if you want a filled rectangle, remove the stroke line and add the fill line
    // ctx.fill();
}

//draws an image dynamically so that it can be moved easily
var pict = new Image();	//create a new image object and attach it to a reference variable
pict.src = "resources/Koala.jpg"; //creates a pathname to an image to use. must do this once for each image.
var pict2 = new Image();
pict2.src = "resources/cat.jpg";
function drawImage() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
   //every time you add this line you will draw an image.  you can simply change the variable
    // that refers to an image to draw a different image
    ctx.drawImage(pict,300,300,100,100); //(variable for image, xcoord, ycoord, width, height
    ctx.drawImage(pict2,250,250,50,50);//notice how the first picture is on top of the second.
    //you may notice distortion of your picture if your height and width are not the same proportion as the original.
}

/**
 * Created by rcortez on 11/12/2017.
 */
