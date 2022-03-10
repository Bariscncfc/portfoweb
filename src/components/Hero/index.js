import React from "react";
import './hero.scss'
import teaser from '../../assets/videos/teaser.mp4';

const Hero = () => {
    return(
     <div className="hero">
         <div className="content">
             <div id="container">
                 Hello , I am
                 <div id="flip">
                     <div><div>COMPUTER ENGİNEER</div></div>
                     <div><div>FRONT-END DEVELOPER</div></div>
                     <div><div>MOBILE DEVELOPER</div></div>
                 </div>
             </div>

         </div>
     </div>
    )
}

export default Hero;