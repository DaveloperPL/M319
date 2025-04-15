//this is a generic variable that is used to run the animation function
var a;



//the initialize function is run from the html when the screen loads.
function initialize() {

    drawBackground();
    //can call the animate function here and get rid of the buttons


}

function startAnimation() {
    document.getElementById("start").disabled = true;
    animate();

}

function stopAnimation() {
    cancelAnimationFrame(a);
}


function animate(){
    a=requestAnimationFrame(animate);
    drawBackground(); //don't forget to draw the background.  Comment this line out to see what happens
    //put function calls here

}

function drawBackground(){
    var cnv = document.getElementById("myCanvas")
    var ctx = cnv.getContext("2d");
    ctx.fillStyle="#FFFFE0";
    ctx.fillRect(0,0,cnv.width,cnv.height);
}

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
    //you can put any code you want inside of the if statement.  It could draw something, set a variable, use a property
    //of an object like blah.left = ...  or even an array blah[i].left = ..... with a loop, or you can abstract things
    //further and call another function.  This code basically takes the place of what you would normally put in
    //a button.

    //a key
    if(keycode == 65)
    {

    }
    //d key
    if(keycode == 68)
    {

    }


    //all key numbers can be found on the internet
});
