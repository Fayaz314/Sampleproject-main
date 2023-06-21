import React from "react";
import { useNavigate } from "react-router-dom";
let Order = () => {
    let n = useNavigate()
    function goHome() {
        n('/')
    }
    function goOrder() {
        n('/Order')
    }
    function goContact() {
        n('/Contact')
    }
    return (
        <div>
            <div>
                <ul id="ul">
                    <li id="home" onClick={goHome}>Home</li>
                    <li id="order" onClick={goOrder}>Order</li>
                    <li id="contact" onClick={goContact}>Contact</li>
                </ul>
            </div>
            <section>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsa totam, accusamus doloribus numquam beatae magnam quos inventore ratione qui aut quidem, quae provident quas quia? Adipisci, corrupti dignissimos molestias doloremque sed sapiente eveniet consequuntur suscipit commodi rem! Ipsam incidunt expedita laborum temporibus commodi iusto.
            </section>
        </div>
    )
}
export default Order;