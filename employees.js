(function () {
    var employees = [{
            firstName: "Ravi"
            , lastName: "Kiran"
            , age: 25
        }
        , {
            firstName: "Hema"
            , lastName: "latha"
            , age: 45
        },
                    {
            firstName: "John"
            , lastName: "Papa"
            , age: 23
        }];
    //we have to create a row for every employee
    //each row should contain three columns
    //first last and age.
    //After creating row attach the row to the the tbale
    //after creating column attach to row.
    
    function buildTable(){
        var tblEmployee = document.getElementById("tblEmployees");
        for(let i=0;i<employees.length;i++){
            //console.log(employees[i]);
             let row = createRow(employees[i]);
            tblEmployee.appendChild(row);
        }
    }
    
    function createRow(emp){
        //console.log("--Row for --Employee");
        //console.log(emp); 
        let firstName =createColumn(emp.firstName);
        let lastName=createColumn(emp.lastName);
        let age = createColumn(emp.age);
        let btnColumn = createColumn("");
        let button = createButton();
        btnColumn.appendChild(button);
        
        let row = document.createElement("tr");
        //row.appendChild(createColumn(emp.firstName));
       row.appendChild(firstName);
        row.appendChild(lastName);
        row.appendChild(age);
        row.appendChild(btnColumn)
        
        console.log(row);
        return row;
    }
    
    function createColumn(data){
        //console.log("--Column Creating--");
       // console.log(data);
       /* var column = "<td>"+data+"</td>";
        console.log(column);*/
        var column = document.createElement("td");
        column.innerHTML=data;
        console.log(column);
        return column;
    }
    function createButton(){
      var btn=document.createElement("button");
        btn.innerHTML="Edit";
        btn.className="btn btn-primary";
        return btn;
    }
    
     buildTable();
})();
























