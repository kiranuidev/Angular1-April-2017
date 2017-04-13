(function(){
    
    function Person(){
        let pan ="kdkk12351q";//private member
        this.firstName="";
        this.getMaskedPAN =function(){
            return "xxx-xxx-"+pan.substring(6,10)
        }
    }
    Person.suffix="MR.";//static member of the person.
   
    var employee = new Person();
    
    employee.salary="";
    
    
    //var mangaer = new employee();
    //error why? 
    //employee is not a function/constructor.
    var manager = new Object(employee);
    console.log(manager);
    Person.prototype.lastName="";
    
})();






