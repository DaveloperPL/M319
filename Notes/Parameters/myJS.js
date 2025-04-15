

function doStuff(){
    // var num1 = parseInt(prompt("give a number"))
    // var num2 = parseInt(prompt("give me a second number"))
    // doStuff()
    // doStuff()
    // add(num1,num2)
    // blah(3,4,5)
    // add(10,10)
    // calcRnum(1,6)
    var x = prompt("what is " + calcRnum(1,10) + " + " + calcRnum(1,10));
}

function calcRnum(num1,num2){
    //generates random numbers between num1 and num2.  Inclusive of both.  Good math to understand.
    return Math.floor(Math.random()*(num2-num1+1))+num1;
}

function add(num1, num2){
    var result = num1 + num2
    alert(result)
}
// function doStuff(){
//     alert("Dfklsdjf")
// }

function blah(x,y,z){
    alert(x*y*z)
}
