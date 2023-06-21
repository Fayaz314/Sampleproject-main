import React from "react";1040
function Sum(){1040
    let a,b;
    function Myconvert(a,b)
    {
        a=Number(a);
        b=Number(b);
        
        return(
        
        alert(`${(a+b)}`)
        )
    }
    return(
        <div>
       {a=window.prompt("Enter a:")}
       {b=window.prompt("Enter b:")}
       {Myconvert(a,b)}
       
       </div>
    )
}
export default Sum