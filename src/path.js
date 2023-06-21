import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contact from './Contact';
import Order from './Order';
import Home from './Home'; 
let Path=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path='/Order' element={<Order></Order>}></Route>
            <Route path='/Contact' element={<Contact></Contact>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Path;