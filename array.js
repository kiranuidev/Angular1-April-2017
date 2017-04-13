(
function(){
    Array.prototype.first = function(){
       return this[0];
    }
      Array.prototype.even = function(){
          var result =[];
       for(var i=0;i<this.length;i++){
           if(i%2==0){
               result.push(this[i]);
           }
       }
          return result;
    }
      Array.prototype.odd = function(){
          var result =[];
       for(var i=0;i<this.length;i++){
           if(i%2==1){
               result.push(this[i]);
           }
       }
          return result;
    }
    /*var users = ["Kiran","Jatesh","Teja"];
    var result = users.first();
    console.log(result)*/
}
)();