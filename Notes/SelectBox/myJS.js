var x = []
function decrease(){
    x.push("lkdsfj")
    alert(x)
}
function init(){
    var x = document.getElementById("pets")
    var option = document.createElement("option")
    option.text = "cat"
    x.add(option)
    option = document.createElement("option")
    option.text = "dog"
    x.add(option)
}

function getPetName(){
    var selectedThing = document.getElementById("pets").value
    alert(selectedThing)
}