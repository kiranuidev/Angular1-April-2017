function calculate(){
    let z=1000;
   var i=10; 
    if(i==10){
        var x=100;
        let y=2000;
        console.log(z);
    }
    
    console.log(x);//output is 100
    console.log(y);//ouput will be error coz y is block scoped.
}
calculate();