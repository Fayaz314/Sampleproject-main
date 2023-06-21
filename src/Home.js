import React from "react";
import { useNavigate } from "react-router-dom";
let Home=()=>
{
    let n=useNavigate()
    function goHome(){
        n('/')
    }
    function goOrder(){
        n('/Order')
    }
    function goContact(){
        n('/Contact')
    }
    return(
        <div>
            <div id="all">
            <ul id="ul">
                <li id="home"onClick={goHome}>Home</li>
                <li id="order"onClick={goOrder}>Order</li>
                <li id="contact"onClick={goContact}>Contact</li>
            </ul>
            </div>
            <section>
                This is the Home page.
            </section>
        </div>
    )
}
export default Home;