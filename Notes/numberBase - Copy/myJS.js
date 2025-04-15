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