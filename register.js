//immedaite function syntax.
(function () {
    var controls;
    controls = {}; //object literal.
    controls.firstName = document.getElementById("txtFirstName");
    controls.lastName = document.getElementById("txtLastName");
    controls.age = document.getElementById("txtAge");
    controls.country = document.getElementById("ddlCountry");
    controls.btnRegister = document.getElementById("btnRegister");
    controls.btnRegister.addEventListener("click", registerUser);
    controls.firstName.addEventListener("keypress", alphabetsOnly);
    controls.btnRegister.addEventListener("mouseover", changeColor);
    controls.age.addEventListener("keypress", numbersOnly);

    function registerUser() {
        alert("hi");
    }

    function numbersOnly(evt) {
        console.log(evt);
        let keyCode = evt.keyCode;
        if (keyCode >= 48 && keyCode <= 57) {}
        else {
            evt.preventDefault();
        }
    }

    function alphabetsOnly(evt) {
        console.log(evt);
        let keyCode = evt.keyCode;
        if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {}
        else {
            evt.preventDefault();
        }
    }

    function changeColor(evt) {
        console.log(evt);
    }
})();