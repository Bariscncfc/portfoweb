import React, {useState} from 'react';
import './header.scss'
import logo from '../../assets/images/logo1.png';


const Header = () => {

    const [isActive, setActive] = useState(false);

    const burgerMenuClick = () => {
      setActive(true);
    }

    return (
        <div className="header">
                    <div className="header__logo">
                        <h1>BARIŞ CAN ÇİFÇİ</h1>
            </div>
            <div className={isActive ? 'topnav responsive': 'topnav'}  id="Topnav">
                <a href="#home" >Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <a href="javascript:void(0);" className="icon" onClick={burgerMenuClick}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </div>
    )

}

export default Header;