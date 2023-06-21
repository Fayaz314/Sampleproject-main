import React from 'react';
import { useNavigate } from 'react-router-dom';
let Contact=()=>
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
            <div>
            <ul id="ul">
                <li id="home" onClick={goHome}>Home</li>
                <li id="order"onClick={goOrder}>Order</li>
                <li id="contact"onClick={goContact}>Contact</li>
            </ul>
            </div>
            <section>
                This is the Contactpage.
            </section>
        </div>
    )

}
export default Contact;