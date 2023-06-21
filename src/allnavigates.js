import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import Mainpage from './main';
import Notificationspage from "./notifications";
import Postpage from "./post";
import Networkspage from "./networks";
import Profilepage1 from "./profilepage1";

import './main1.css';
import UpdatePost from "./UpdatePost";
let Paths=()=>{
    return(
        <BrowserRouter>
        <Routes>
           <Route path='/' element={<Mainpage></Mainpage>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path='/Signup' element={<Signup></Signup>}></Route>
            <Route path='/Notificationspage' element={<Notificationspage></Notificationspage>}></Route>
            <Route path='/Postpage' element={<Postpage></Postpage>}></Route>
            <Route path='/Networkspage' element={<Networkspage></Networkspage>}></Route>
            <Route path='/Profilepage1' element={<Profilepage1></Profilepage1>}></Route>
            <Route path="/UpdatePost/:id" element={<UpdatePost/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Paths;