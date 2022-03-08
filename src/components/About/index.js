import React from 'react';
import './about.scss'
import PercentageCircle from "./Percentage Circle";


const About = () => {
    return(
        <div className="about">
             <span>About Me </span>
            <p>This is the TodoList app v1.0.0. It is part of a React crash course</p>
            <div className="about__desc">
                <p>
                    Merhaba ben <strong>Barış Can Çifçi</strong>. Beykent Üniversitesi Bilgisayar Mühendisliğinden mezunum.Kariyerime
            yazılım geliştirici olarak devam ediyorum.<br/>Front-End Teknolojileri
            ile ilgileniyorum ve o alanda uzmanlaşmaya çalışıyorum.Yaptığım
            çalışmalara github profili üzerinden bakabilirsiniz.
                </p>
                <button>Download CV</button>
                <PercentageCircle/>
            </div>
        </div>
    )
}

export default About;