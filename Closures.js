

//outer function
function myInformation(lastName){
    
    var firstName="Angular";
     //inner function
    return function (){
        console.log(firstName);
        console.log(lastName);
    }
}

var data1 = myInformation("Javascript");

var data2 = myInformation("Typescript");

data1();
data2();












