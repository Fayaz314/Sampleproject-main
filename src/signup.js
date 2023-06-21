
import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import './signup.css';
import fig from './images2/logo.jpg'
import axios from "axios";
let Signup=()=>{
    let n=useNavigate();
    const [firstname, setFirstName] = useState('');
    const [secondname, setSecondName] = useState('');
    const [mailid, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRetypePassword] = useState('');

        const Submit=async(e)=>{
            e.preventDefault();
            if(password!==repassword)
            {
              alert("password mismatching")
            }
            else{
         
                  
                  try{
                     const mydata={firstname:firstname,secondname:secondname,mailid:mailid,password:password,repassword:repassword};
                     const res=await axios.post("http://localhost:8080/requestsignup/signupdata",mydata);
                     alert(res.data);
                     n('/Login');
                  }
                  catch(error){
                     console.error("Error signing up:",error);
                  }
                }
               
      }
    
   
   
    return(
        <div id="maindiv2">
            <div id="image">
               <div>
                  <img src={fig}></img>
               </div>
            </div>
            <div id="signup">
                <div>
                  <form onSubmit={Submit}>
                    <h1 class="h2">Welcome to <span id="span">CONNECT</span></h1>
                    <h5>First Name</h5><input type="text" placeholder="Enter FirstName" id="sinput" value={firstname} onChange={e=>setFirstName(e.target.value)} required></input>
                    <h5>Second Name</h5><input type="text" placeholder="Enter SecondName"id="sinput" value={secondname} onChange={e=>setSecondName(e.target.value)}required></input>
                    <h5>Mail Address </h5><input type="email" placeholder="Enter Mail"id="sinput" value={mailid} onChange={e=>setEmail(e.target.value)} required></input>
                    <h5>Password</h5><input type="password" placeholder="Enter Password"id="sinput" value={password} onChange={e=>setPassword(e.target.value)}required></input>
                    <h5>Retype Password</h5><input type="password" placeholder="Retype Password"id="sinput" value={repassword}onChange={e=>setRetypePassword(e.target.value)}required></input><br></br>
                    <button id="createaccount" >Create Account</button>
                  </form>
                    
                </div>
            </div>
        </div>
    )
}
export default Signup;