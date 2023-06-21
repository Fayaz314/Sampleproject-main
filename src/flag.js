import React from "react"

import img from './flag.jpg';
function Myflag()
{
    return(
        <div style={{border:'1.5px solid black',height:'150px',width:'200px',margin:'20%'}}>
            <div id="first"></div>
            <div id="second">
                <div><img src={img} style={{width:'50px','padding-left':'70px'}}></img></div>
            </div>
            <div id="third"></div>
            <div id="line"></div>
            <div id="down"></div>
            
        </div>
    )
}
export default Myflag;


