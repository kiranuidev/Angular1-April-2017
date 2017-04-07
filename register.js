var txtFirstName = document.getElementById("txtFirstName");
var txtLastName = document.getElementById("txtLastName");
var terms = document.getElementById("chkTerms");
var ddlCountry = document.getElementById("ddlCountry");
function registerUser(){
    var firstName = txtFirstName.value;
    var lastName = txtLastName.value;
    var agree = terms.checked;
    var country = ddlCountry.value;
    alert(country);
    //alert(agree);
    //alert(firstName+lastName);
}

function displayProfile(){
    txtFirstName.value="Kiran";
    txtLastName.value="PVS";
    terms.checked =true;
    ddlCountry.value ="US";
}

displayProfile();