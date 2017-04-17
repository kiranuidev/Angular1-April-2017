function bookMyTicket(source,destination,mode){
    var discount ="";
    
    if(destination=="Dubai"){
        discount="10000";
    }
    if(destination=="USA"){
        discount="No you wont get any coz of trumph";
    }
    
    return function confirmation(){
        console.log("Dear Curstomer your "+mode+" booking from :"+source);
        console.log("To: "+destination);
        console.log("Is confirmed");
        console.log("your discount is :"+discount);
        
    }
}

var getTicket = bookMyTicket("Hyderabad","Dubai","Flight");
var getTicketToUSA = bookMyTicket("Hyderabd","USA","Flight");
getTicket();
getTicketToUSA();