
var firstName = document.getElementById("txtFirstName");
console.log(firstName);
console.log(firstName.type);
console.log(firstName.id);
console.log(firstName.value);

//changing a text box to a checkbox.
firstName.type="checkbox";
console.log(firstName.type);

firstName.type="radio";
console.log(firstName.type);