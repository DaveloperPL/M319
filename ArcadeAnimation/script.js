var Platforms = []
var Left = false
var Right = false
var x = 205
var y = 280
var ladder = false
var lastDir = "Left"
var Jump = false
var JumpMod = 4
var UbovePlat = false
var PlatformH = 200


var Mario = new Image();
Mario.src ="img_1.png";

function barrels(){

}

function init(){
    for (i=0;i<4;i++){
        var ctx = document.getElementById("canvas").getContext("2d");
    }
}
var a;
function Animate(){
    a = requestAnimationFrame(Animate)
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = "#F00FF0"
    ctx.fillRect(0,0,2000,2000)
    drawPlatfroms()
    drawCharacter()
    jump()
}
function drawPlatfroms(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = "#0000FF"
    ctx.fillRect(205,200,1495,25)
    ctx.fillRect(205,440,1495,25)
    ctx.fillRect(205,660,1495,25)
    ctx.fillRect(205,880,1495,25)
}
function drawCharacter(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.drawImage(Mario, x, y, 60, 80)
    if (y>800 && x==145){
        Left = false
    }
    if (y>800 && x==1700){
        Left = false
    }
    if (Left == true){
        x = x + 2
    }else if (Right == true){
        x = x - 2
    }
    if (x<146 || x>1699){
        y = y + 1
    }

    if ((y+80<PlatformH && Jump == false) || (UbovePlat == true && Jump == false)){
        y=y+1
        UbovePlat = true
        if (y+80>PlatformH){
            y = PlatformH+80
        }
    }

    //Makes the platform level the play area

    if (y<200-80){
        PlatformH = 200
    }else if (y < 440-80){
        PlatformH = 440
    }else if (y < 660 - 80){
        PlatformH = 660
    }else if (y < 880 - 80){
        PlatformH = 880
    }
}
function jump(){
    if (Jump == true){
        y = y - JumpMod
        JumpMod = JumpMod - 0.1
        if (y+80<PlatformH || UbovePlat == true){
            UbovePlat = true
            if ((y-JumpMod)+80>PlatformH){
                UbovePlat = false
                y = PlatformH-80
                Jump = false
                JumpMod = 4
            }
        }
        if (JumpMod <= -4){
            y = y - JumpMod
            JumpMod = 4
            Jump = false
        }
    }
}

$(document).keydown(function(event){
    var ctx = document.getElementById("canvas").getContext("2d");
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == 65)
    {
        Right = true
        lastDir = "Right"
    }
    if(keycode == 68)
    {
        Left = true
        lastDir = "Left"
    }
    if(keycode ==87){
        Jump = true
    }
});
$(document).keyup(function(event){
    var ctx = document.getElementById("canvas").getContext("2d");
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == 65)
    {
        Right = false
    }
    if(keycode == 68)
    {
        Left = false
    }
    if(keycode == 54)
    {
        //key 6 is for debugging
        alert(PlatformH)
    }
});