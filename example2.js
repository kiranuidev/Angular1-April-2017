function getFullName(){
    var firstName = document.getElementById("txtFirstName");
    var lastName =document.getElementById("txtLastName");
    var fullName = document.getElementById("txtFullName");
    var result= firstName.value+lastName.value;
    console.log(result);
    //this willl write the data back to html full name text box.....
    fullName.value=result;
}