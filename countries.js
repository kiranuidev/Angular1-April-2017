(function(){
    var countries =[{value:"IN",text:"India"},
                   {value:"US",text:"United States"},
                   {value:"CA",text:"Canada"}];
    
    function createOptionTag(country){
        var tag = document.createElement("option");
        tag.value=country.value;
        tag.innerHTML=country.text;
        return tag;
    }
    function buildDropDown(){
        var dropdown = document.getElementById("ddlCountry");
        for(let i=0;i<countries.length;i++){
            let option = createOptionTag(countries[i]);
            dropdown.appendChild(option);
        }
    }
    buildDropDown();
})();










