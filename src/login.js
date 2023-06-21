import React,{useState} from 'react';
import './login.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

 let Login=()=>{
 
    const[lusername,setUsername]=useState(" ");
    const[lpassword,setPassword]=useState(" ");
    
        let n=useNavigate();
        
     
                  
                  const Saved = async(e)=>{
                    e.preventDefault();
                    try{
                      const response=await axios.post("http://localhost:8080/requestsignup/logindata/"+lusername+'/'+lpassword);
                      alert(response.data);
                      if(response.data==="Success"){
                        let a=document.getElementById("username").value;
                        alert(`Hey ${a} Welcome to CONNECT`);
                        n('/')
                      }
                     }
                     catch(error){
                      alert("Invalid password")
                     }

                  }
              
                 
        function Gosignup(){
            n('/Signup')
        }
        let user=localStorage.getItem("username");
        localStorage.setItem("username",user);
        
        
    return(
        <div id="maindiv">
             
              <center>
                <form id="ourdata" onSubmit ={Saved}>
                  <h1>WELCOME TO <span>CONNECT</span> PAGE</h1>
                    <h3>Enter YourEmail</h3><input  id="username" type="email" placeholder="Enter Yourmail"  onChange={e=>setUsername(e.target.value)} name="username" required></input><br></br>
                    <h3>Enter Password</h3><input type="password" placeholder="Enter your password"  onChange={e=>setPassword(e.target.value)} name="password" required></input>
                   <br></br>
                   <button id="button" >Login</button>
                   <button id="button" onClick={Gosignup} >Sign Up</button>
                
                </form>
                </center>
                
            
        </div>
    )
}
export default Login;