function convertBase2(){
    var answer = ""
    var numConvert = parseInt(document.getElementById("inputNum").value)
    // alert(numConvert)

    while(numConvert>0){
        answer =   numConvert%2 + answer;
        // alert(answer)
        numConvert = Math.floor(numConvert/2)
        // alert(numConvert)
    }
    document.getElementById("display").innerHTML = answer


    // answer =   numConvert%2 + answer;
    // alert(answer)
    // numConvert = Math.floor(numConvert/2)
    // alert(numConvert)
    // answer =   numConvert%2 + answer;
    // alert(answer)
    // numConvert = Math.floor(numConvert/2)
    // alert(numConvert)
}

function convertBase10(){
    var numConvert = document.getElementById("inputNum").value
    var answerConverted=0;
    for(i = 0;i<numConvert.length;i++){
        num1 = parseInt(numConvert.substring(i,i+1));
        answerConverted = answerConverted +num1*Math.pow(2, numConvert.length-(i+1))

    }
    alert(answerConverted)


    // num2 = parseInt(numConvert.substring(1,2));
    // answerConverted = answerConverted +num2*Math.pow(2, numConvert.length-2)
    // alert(answerConverted)
    // num3 = parseInt(numConvert.substring(2,3));
    // answerConverted = answerConverted +num3*Math.pow(2, numConvert.length-3)
    // alert(answerConverted)
    // num4 = parseInt(numConvert.substring(3,4));
    // answerConverted = answerConverted +num4*Math.pow(2, numConvert.length-4)
    // alert(answerConverted)

}