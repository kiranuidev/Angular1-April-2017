var firstCtrl = document.getElementById("txtFirst");
var secondCtrl = document.getElementById("txtSecond");
var resultCtrl = document.getElementById("txtResult");

function mul(){
    var first= firstCtrl.value;
    var second = secondCtrl.value;
    var result = first*second;
    resultCtrl.value = result;
}
function subtract(){
    resultCtrl.value = firstCtrl.value-secondCtrl.value;
}

function divide(){
    resultCtrl.value = firstCtrl.value/secondCtrl.value;
}

function modulus(){
    resultCtrl.value = firstCtrl.value%secondCtrl.value;
}

function add(){
    var tryth="12";
    resultCtrl.value = parseInt(tryth)+parseInt(secondCtrl.value);
}
