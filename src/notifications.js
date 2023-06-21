import React from "react";
import Postpage from "./post";
import { useNavigate } from "react-router-dom";
import fg from './images2/connect.png';
import fg1 from './images2/search-icon-01.jpg';
import fg2 from './images2/home2.png';
import fg3 from './images2/mynetworks.png';
import fg4 from './images2/post.png';
import fg5 from './images2/notification.png';
import fg6 from './images2/threelines.jpg';
import fg7 from './images2/man1.jpg';
import fg8 from './images2/man2.jpg';
import fg9 from './images2/man3.jpg';
import fg10 from './images2/man4.jpg';
import fg11 from './images2/women1.jpg';
import fg12 from './images2/women2.jpg';
import fg15 from './images2/man5.jpg';
import fg16 from './images2/women5.jpg';
let Notificationspage=()=>{
    
    let n=useNavigate();
    function Gologin(){
        n('/Login')
    }
    function GoHome(){
        n('/')
    }
    function GoConnect(){
        n('/Networkspage')
    }
    function GoPost(){
        n('/Postpage')
    }
    function GoNotifications(){
        n('/Notificationspage')
    }
    function Searchprofiles(){
        let a=document.getElementById("search").value;
        if(a=="malik"|| a=="Malik")
            {
            n('/Profilepage1')
            }
        else{
            alert(`${a} is not exists in CONNECT...!!`)
        }
            
       }
    return(
        <div>
            <div class="container">
                 <img id="img-connect"src={fg}></img>
                 <input id="search"type="search" Placeholder="Search"></input>
              <button id="searchbtn" onClick={Searchprofiles}><img  id="img-search"src={fg1}></img></button>
                 <div>
                    <h4 style={{color:'white','margin-left':'550px'}}> NOTIFICATIONS</h4>
                    <div id="notificationscolors">
                        <img id="notification"src={fg9}></img>
                        <div>
                            <h5 id="myh5">shaiksaleem@123</h5>
                            <h6 id="myh6">Hi Malik.Where are you?</h6>
                        </div>
                    </div>
                    <div id="notificationscolors">
                        <img id="notification"src={fg11}></img>
                        <div>
                            <h5 id="myh5">shireesha^#</h5>
                            <h6 id="myh6">Welcome to connect. And we will search the jobs for our company growth.</h6>
                        </div>
                    </div>
                    <div id="notificationscolors">
                        <img id="notification"src={fg8}></img>
                        <div>
                            <h5 id="myh5">shaikmalikBasha**</h5>
                            <h6 id="myh6">Create Account.And Increase your connections with more peoples.</h6>
                        </div>
                    </div>
                    <div id="notificationscolors">
                        <img id="notification"src={fg12}></img>
                        <div>
                            <h5 id="myh5">sarikasmart $$</h5>
                            <h6 id="myh6">Happy Journey.I am a CBIT Student.I am currently studying B.Tech 3rd year CSE.</h6>
                        </div>
                    </div>
                    <div id="notificationscolors">
                        <img id="notification"src={fg7}></img>
                        <div>
                            <h5 id="myh5">shaiksajid!34</h5>
                            <h6 id="myh6">Where r y saleem?  How are you? Where are you going.</h6>
                        </div>
                    </div>
                    <div id="notificationscolors">
                        <img id="notification"src={fg15}></img>
                        <div>
                            <h5 id="myh5">ShaikMoulali@decent</h5>
                            <h6 id="myh6">Sorry for that one.Saleem and Malik come to my home today is my birthday.</h6>
                        </div>
                    </div>
                    <div id="notificationscolors">
                        <img id="notification"src={fg16}></img>
                        <div>
                            <h5 id="myh5">shaikyousuf($killer)</h5>
                            <h6 id="myh6">Today going to Bangalore.I got a job in TCS.</h6>
                        </div>
                    </div>
                    
                 </div>
            </div>
            <div class="container2">
                    <div class="homeicons">
                        <button class="allicons" onClick={GoHome}><img id="allicons"src={fg2}></img></button>
                        <button class="allicons" onClick={GoConnect}><img id="allicons"src={fg3}></img></button>
                        <button class="allicons" onClick={GoPost}><img id="allicons"src={fg4}></img></button>
                        <button class="allicons" onClick={GoNotifications}><img id="allicons"src={fg5}></img></button>
                        <button onClick={Gologin} class="createaccount" >Create Account</button>
                        
                    </div>
                    
            </div>
        </div>
            
    )
}
export default Notificationspage;