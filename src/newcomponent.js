import React from "react";
import Oldcomponent from "./oldcomponent";
import Hoc from "./process";
let Newhoc=Hoc(Oldcomponent);
const Process=()=>{
    return(
        <div>
            <Oldcomponent/>
        <Newhoc/>
        </div>
        
    )}

export default Hoc;