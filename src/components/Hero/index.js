import React from "react";
import './hero.scss'
import teaser from '../../assets/videos/teaser.mp4';
import Header from "../Header";

const Hero = () => {
    return(
     <div className="hero">
      <div className="teaser">
        <video autoPlay loop muted>
          <source src={teaser} type="video/mp4" />
        </video>
      </div>
         <div className="content">
             <div id="container">
                 Hello , I am
                 <div id="flip">
                     <div><div>COMPUTER ENGİNEER</div></div>
                     <div><div>FRONT-END DEVELOPER</div></div>
                     <div><div>MOBİLE DEVELOPER</div></div>
                 </div>
             </div>

         </div>
     </div>
    )
}

export default Hero;