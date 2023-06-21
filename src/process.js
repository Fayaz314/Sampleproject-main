import React from "react"
import Oldcomponent from "./oldcomponent"
let Hoc=(original)=>{
    let Myhoc=()=>{
        return(
        <div style={{backgroundColor:'blue'}}>
        <original/>
    </div>
    )
    }
    return Myhoc
}
export default Hoc;