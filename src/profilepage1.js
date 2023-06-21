import React from "react";
import './profilepage.css';
import {useNavigate} from "react-router-dom";
import fg1 from './images2/man2.jpg';
function Profilepage1(){

    let n=useNavigate();
    let Goback=()=>{
      n('/');
    }
  let count=0;
  function connected(){
    document.getElementById("profilebutton").innerHTML="CONNECTED";
    count+=1;
  }
    return(
         <div>
          <div class="profilepage">
              <div class="details">
                <img  id="profileimages"src={fg1}></img>
                <h2 id="profileh2">Shaik Malik Basha</h2>
                <h4 id="profileh4">@50Connections</h4>
                <h6 id="profileh6">Student</h6>
                <button id="profilebutton"onClick={connected}>CONNECT</button>
              </div>
              <div class="alldetails">
                  <div class="summary">
                    <details>
                      <summary>My Details</summary>
                      <h5 id="profilename">Name :</h5><h6 id="profile">Shaik Malik Basha</h6>
                      <h5 id="profilename">Age :</h5><h6 id="profile">20</h6>
                      <h5 id="profilename">Current City :</h5><h6 id="profile">Bangalore</h6>
                      <h5 id="profilename">Profession :</h5><h6 id="profile">Student</h6>
                    </details>
                  </div>
                  <div class="posts">
                        <h4 class="myposts">Posts</h4>
                        
                  </div>
                  <button id="postid" onClick={Goback}>GoBack</button>
                 
              </div>
                
          </div>
         </div>
    )
}
export default Profilepage1;