import React from "react";
function Clicking(){
    
    function saleem(){
        alert(document.getElementById("myname").value)
    }
   
    return(
        <div>
        <input id="myname"type="text"></input>
        <button onclick="saleem()">Submit</button>
       
        </div>
    )
    
     
      
}

export  default Clicking;