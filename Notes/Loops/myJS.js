function forStuff(){
    for (i=0;i<5;i++){
        alert(i)
    }

    // var x =  0;
    // while(x<5){
    //     alert(x)
    //     x+=1;
    // }
    var
    for(x=0; ; x++)
        alert(sub....)


        var x = 0
    while()
}


function whileStuff(){
    var dis = "";
    var answer =1;
    var num =parseInt(prompt("what number do you want the factoial of"));
    if(num >171 || num <0){
        alert("sorry can't computer")
    }else if(num == 0) {
        alert(1)
    }else{

        while(num>0){
            answer = answer * num;
            num = num -1;

        }
        alert(answer)
    }

    // var num =50;
    // var testNumber =1;
    // while(testNumber<=num){
    //     if(num%testNumber==0){
    //         dis = dis +testNumber + ", ";
    //     }
    //     //increment
    //     testNumber+=1;
    // }
    document.getElementById("display").innerHTML = dis
    // var num = 1;
    // var dis = "";
    // while(num<100){
    //     if(num%3 == 0 && num%7==0) {
    //
    //     }
    //     num+=1;
    //     document.getElementById("display").innerHTML = dis
    // }


    // var x = 0;
    // var dis = "";
    // while(x <=10 ){
    //
    //     dis = dis +x + ", "
    //     x+=2;
    // }
    // document.getElementById("display").innerHTML = dis



    // var x =  0;
    // while(x<5){
    //     alert(x)
    //     x+=1;
    // }
    // var tries = 0;
    // var x =  3;
    // var y = 2;
    // var guess = prompt("what is " + x + " + " + y )
    // tries +=1
    // while(guess !=5){
    //
    //     var guess = prompt("what is " + x + " + " + y);
    //     tries +=1
    // }
    // alert(tries);

/*    var tries = 0;
    var x =  3;
    var y = 2;
    var correct = false;
    while(correct==false){
        var guess = prompt("what is " + x + " + " + y);
        if(guess==5){
            alert("correct")
            correct=true;
        }else{
            alert("wrong")
        }
        tries +=1
    }
    alert(tries);*/
}