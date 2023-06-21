import React from "react";

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
import fg13 from './images2/women3.jpg';
import fg14 from './images2/women4.jpg';
import fg15 from './images2/man5.jpg';
import fg16 from './images2/women5.jpg';
let Networkspage = () => {
    let n = useNavigate();
    function Gologin() {
        n('/Login')
    }
    function GoHome() {
        n('/')
    }
    function GoConnect() {
        n('/Networkspage')
    }
    function GoPost() {
        n('/Postpage')
    }
    function GoNotifications() {
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
    return (
        <div>
            <div class="container">
                <img id="img-connect" src={fg}></img>
                <input id="search" type="search" Placeholder="Search"></input>
                <button id="searchbtn" onClick={Searchprofiles}><img id="img-search" src={fg1}></img></button>
              <div>
                    <h4 style={{color: 'white', margin: '5px' }}>Notifications</h4>
                    <div id="notificationscolor">
                        <img id="notifications" src={fg9}></img>
                        <div>
                            <h5>shaiksaleem@123</h5>
                            <h6>Hi Malik.</h6>
                        </div>
                    </div>
                    <div id="notificationscolor">
                        <img id="notifications" src={fg11}></img>
                        <div>
                            <h5>shireesha^#</h5>
                            <h6>Welcome to connect.</h6>
                        </div>
                    </div>
                    <div id="notificationscolor">
                        <img id="notifications" src={fg8}></img>
                        <div>
                            <h5>shaikmalikBasha**</h5>
                            <h6>Create Account.</h6>
                        </div>
                    </div>
                    <div id="notificationscolor">
                        <img id="notifications" src={fg12}></img>
                        <div>
                            <h5>sarikasmart $$</h5>
                            <h6>Happy Journey.</h6>
                        </div>
                    </div>
                    <div id="notificationscolor">
                        <img id="notifications" src={fg7}></img>
                        <div>
                            <h5>shaiksajid!34</h5>
                            <h6>Where r y saleem?</h6>
                        </div>
                    </div>
                    <div id="notificationscolor">
                        <img id="notifications" src={fg13}></img>
                        <div>
                            <h5>shaikameesha%%$&</h5>
                            <h6>Good Morning.</h6>
                        </div>
                    </div>
                    <div id="notificationscolor">
                        <img id="notifications" src={fg10}></img>
                        <div>
                            <h5>shaikyounus@loverboy</h5>
                            <h6>Hey!</h6>
                        </div>
                    </div>
                    <div id="notificationscolor">
                        <img id="notifications" src={fg14}></img>
                        <div>
                            <h5>NirmalaY.N.R.</h5>
                            <h6>Good Morning Guys!</h6>
                        </div>
                    </div>
                    <div id="notificationscolor">
                        <img id="notifications" src={fg15}></img>
                        <div>
                            <h5>ShaikMoulali@decent</h5>
                            <h6>Sorry for that one.</h6>
                        </div>
                    </div>
                    <div id="notificationscolor">
                        <img id="notifications" src={fg16}></img>
                        <div>
                            <h5>shaikyousuf($killer)</h5>
                            <h6>Today going to Bangalore.</h6>
                        </div>
                    </div>

                </div>
            </div>
            <div class="container2">
                <div class="homeicons">
                    <button class="allicons" onClick={GoHome}><img id="allicons" src={fg2}></img></button>
                    <button class="allicons" onClick={GoConnect}><img id="allicons" src={fg3}></img></button>
                    <button class="allicons" onClick={GoPost}><img id="allicons" src={fg4}></img></button>
                    <button class="allicons" onClick={GoNotifications}><img id="allicons" src={fg5}></img></button>
                    <button onClick={Gologin} class="createaccount" >Create Account</button>

                </div>
               <div id="container-3">
                  <div class="para">INCREASE YOUR <span id="connections">CONNECT</span>IONS AND SHARE YOUR IDEAS...!</div>
                      <div class="eachone">
                           <img id="eachone" src={fg7}></img>
                           <h4>Sunil Kumar</h4>
                           <h6 id="h6">@30K Connections</h6>
                           <button id="connect">CONNECT</button>
                           
                       </div>
                      <div class="eachone">
                           <img id="eachone" src={fg11}></img>
                           <h4>Sophia Henry</h4>
                           <h6 id="h6">1M Connections</h6>
                           <button id="connect">CONNECT</button>
                      </div>
                      <div class="eachone">
                           <img id="eachone" src={fg8}></img>
                           <h4>Poorna Anand</h4>
                           <h6 id="h6">@500 Connections</h6>
                           <button id="connect">CONNECT</button>
                      </div>
                      <div class="eachone">
                           <img id="eachone" src={fg12}></img>
                           <h4>Sarika CBIT</h4>
                           <h6 id="h6">@1K Connections</h6>
                           <button id="connect">CONNECT</button>
                      </div>
                     <div class="eachone">
                           <img id="eachone" src={fg9}></img>
                           <h4>Shaik Saleem</h4>
                           <h6 id="h6">@2K Connections</h6>
                           <button id="connect">CONNECT</button>
                      </div>
                      <div class="eachone">
                           <img id="eachone" src={fg13}></img>
                           <h4>Shirisha CBIT</h4>
                           <h6 id="h6">2M Connections</h6>
                           <button id="connect">CONNECT</button>
                      </div>
                      <div class="eachone">
                           <img id="eachone" src={fg10}></img>
                           <h4>Malik Basha</h4>
                           <h6 id="h6">@2K Connections</h6>
                           <button id="connect">CONNECT</button>
                      </div>
                      <div class="eachone">
                           <img id="eachone" src={fg14}></img>
                           <h4>Claire Gamer</h4>
                           <h6 id="h6">@10K Connections</h6>
                           <button id="connect">CONNECT</button>
                      </div>
                      <div class="eachone">
                           <img id="eachone" src={fg15}></img>
                           <h4>Shaik Moulali</h4>
                           <h6 id="h6">@5K Connections</h6>
                           <button id="connect">CONNECT</button>
                      </div>
                      <div class="eachone">
                           <img id="eachone" src={fg16}></img>
                           <h4>Shaik Yousuf</h4>
                           <h6 id="h6">@50K Connections</h6>
                           <button id="connect">CONNECT</button>
                      </div>
                    </div>

               </div>
            
            
            

        </div>

    )
}
export default Networkspage;