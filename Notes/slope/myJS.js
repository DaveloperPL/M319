var x1;
var x2
var y1;
var y2;

function calculateSlope(){
    if(x2-x1 == 0){
        document.getElementById("display").innerHTML = "slope is undefined"
    }else{
        var slope =
            document.getElementById("display").innerHTML = slope
    }

}
function calculateMidpoint(){
   var mx =(x1+x2)/2
    var my=
    document.getElementById("display").innerHTML = "(" + mx + "," + my + ")"
}
function getXY(){
    var coord = document.getElementById("firstCoordinate").value
    // alert(coord)
    var comma = coord.indexOf(",");
    alert(comma)
    x1 = parseInt(coord.substring(1,comma));
    alert(x1)
    y1 = parseInt(coord.substring(comma+1, coord.length))
    alert(y1)
    var coord2 = document.getElementById("secondCoordinate").value
    // alert(coord)
    var comma = coord2.indexOf(",");
    alert(comma)
    x2 = parseInt(coord2.substring(1,comma));
    alert(x2)
    y2 = parseInt(coord2.substring(comma+1, coord.length))
    alert(y2)
}