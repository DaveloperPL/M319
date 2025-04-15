/*
This template has everything you may need to start an animated game project including some pictures.
You should change all pictures and shapes to suit your needs.
 */

//draws game board
var frog = new Image()
frog.src= "resources/frog.png"
var star = new Image()
star.src = "resources/star.png"
var stars =[]
function drawBackground() {
    drawGrass();

}
function drawGrass() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle= "#13691d";
    ctx.fillRect(0,0,650,850);
}

//initialize functions onload
function initialize(){
    drawBackground();
    var ctx = document.getElementById("canvas").getContext("2d");
    frog = createImage(frog.src,50,50,50,50);
    frog1 = createImage(frog.src,150,150,50,50);
    stars.push(createImage(star.src,75,75,50,75))
    stars.push(createImage(star.src,120,120,50,75))
    stars.push(createImage(star.src,200,200,50,75))
    stars.push(createImage(star.src,33,200,50,75))
    stars.push(createImage(star.src,4,200,50,75))
    stars.push(createImage(star.src,400,200,50,75))
    stars.push(createImage(star.src,22,200,50,75))
    stars.push(createImage(star.src,333,200,50,75))

    animate()

}
function drawFrog(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.drawImage(frog,frog.left,frog.top,frog.width,frog.height);
    ctx.drawImage(frog1,frog1.left,frog1.top,frog1.width,frog1.height);
}
function  drawStars(){
    var ctx = document.getElementById("canvas").getContext("2d");
    for(i = 0;i<stars.length;i++){
        ctx.drawImage(stars[i],stars[i].left,stars[i].top,stars[i].width,stars[i].height);
    }
}
//You may or may not need this function.  Remember you can add other properties inside the function if you want.
var createRectangle =  function(xCor, yCor, w,h){
    //the words in purple are not special.  You could have typed blahblah and it still works
    //the first line makes a new object.  without it all of the rectangles would act line 1 rectangle
    var temp = new Object();
    temp.x = xCor;
    temp.y = yCor;
    temp.width = w;
    temp.height = h;
    //return is necessary so that when you use your rectangle, the variables you made in this funciton can be used also.
    return temp;
}
//You may or may not need this function.  Remember you can add other properties inside the function if you want.
var createImage = function(src,xco,yco,w,h) {
    var img   = new Image();
    img.src   = src;
    img.left = xco;
    img.top = yco;
    img.width = w;
    img.height = h;
    img.vis= true;
    return img;
};

/*
this code allows you to use the keyboard.  It is written in Jquery.  Jquery is version of javascript that is downloaded
as a library.  The download line is in the header of the html.  Each of the keycodes below can be found in the
ASCII table.
 */
$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);

    if(keycode == 13)
    {
        alert("you pressed the return key");
    }
    if(keycode == 27)
    {
        alert("escape key")
    }
    //a key to go left
    if(keycode == 65)
    {

    }
    //d key to go right
    if(keycode == 68)
    {

    }
});

//Anything that needs to be drawn on the screen should be in this function.  Make sure it is abstracted
function animate() {
    a=requestAnimationFrame(animate);
    drawFrog()
    drawStars()
}
/*
**********************************************************************************************************
* Below are a few generic functions you may need.  Feel free to delete these or add more.
* ********************************************************************************************************
 */


function createStartImages(){

}


//this function may be helpful.  You should understand it and be able to make it on your own.
function getRandomInt(min, max) { //return random int
    return Math.floor(Math.random() * (max - min)) + min;
}

//Having a reset function allows the user to play again.
function reset() { //resets left and top values of frog, but doesn't redraw it

}

//most games require a function to see if winning conditions have been met.
//Do not reload the screen
function checkWin() {

}

//your game may have multiple levels eventually.  Put code here to switch to the next level.  Switching levels
//is not the same as going to another webpage with another HTML file
function NextLevel() {

}

//You may want a function to show your controls for the user.
function help() {
    alert("Controls: W, T, I, and Up Arrow is up. S, G, K, and Down Arrow is down. A, F, J and Left Arrow is left. And D, H, L and Right Arrow is right. The goal of the game is to get the frog into its five homes at the top of the screen. Avoid the cars, snakes and crocodiles, while using the logs as transportation. Also, hearts, stars and clocks all act as power ups. To get to the highest round possible, join together with up to 3 people to play together. Remember there is a timer!");
}
