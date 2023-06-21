import React from "react";
import {useState} from "react";
let[a,setName]=useState("Food is preparing");
const change=()=>{
    setName("Food is prepared");
}
const pick=()=>{
    setName("Food is picked");
}
const delivered=()=>{
    setName("Food is deliverd");
}
function Foodstore(){
    return(
        <div>
        <button onclick={change} onDoubleclick={pick}>Ready</button>
        <button onclick={pick}>Picked</button>
        <button onclick={delivered}>Delivery</button>
        </div>
    )
}
export default Foodstore;