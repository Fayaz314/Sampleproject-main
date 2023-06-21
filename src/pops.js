import React from "react";
function Mycalling(ref)
{
    function mycalling(){
       let a=30;
       let b=40;
       return(
         <div>
             {a}<br></br>
             {b}
         </div>
       )
    }
    let a=Number(ref.a);
    let b=Number(ref.b);
    return(
        <div>
            {a}
            <br></br>
            {b}
            
            <h3> a ={typeof a}</h3>
            <h3>b={typeof b}</h3>
            {a+b}

            

            {mycalling()}
            <br></br>
        </div>
    )
}
export default Mycalling;