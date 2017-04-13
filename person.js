(function(){
    
    function HumanBeing(){
        this.TakesBreath=true;
    }
    var person = new HumanBeing();
    var male = new HumanBeing();
    var xys = new HumanBeing();
    HumanBeing.prototype.walk = true;
    console.log(person);
    
    
})();