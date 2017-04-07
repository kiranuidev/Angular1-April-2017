function getFullName(){
    var firstNameCtrl = document.getElementById("txtFirstName");
    var lastNameCtrl =document.getElementById("txtLastName");
    var fullNameCtrl = document.getElementById("txtFullName");
    
    var result= firstNameCtrl.value+lastNameCtrl.value;
    console.log(result);
    
    //this willl write the data back to html full name text box.....
    fullNameCtrl.value=result;
}