'use client'

import Link from "next/link";
import React, { useState, useRef } from "react";
import '../@header/header.scss'

export default function Header() {
    const [isMereActive, setIsMereActive] = useState(false);
    const headerUlRef = useRef(null);

    function addMere() {
      setIsMereActive(true);
    }
  
    function removeMere() {
      setIsMereActive(false);
    }

    function navToggle() {
        const headerUl = document.getElementById("headerUl");
        const htmlElement = document.getElementById("html");
        const bodyElement = document.getElementById("body");
      
        if (headerUl) {
          headerUl.classList.toggle("active");
        }
      
        if (htmlElement && bodyElement) {
          htmlElement.classList.toggle("overflow-hidden");
          bodyElement.classList.toggle("overflow-hidden");
        }
      }

    
    return (
        <div className="header">
        <Link href="/" className="header__logo">
            <img src="icons/logo.webp" alt="logo"/>
        </Link>
        

        <nav className="header__nav">
            <ul className="header__ul" id="headerUl">
                <li><a href="/">Start</a></li>
                <li><Link href="/baggrund">Baggrund</Link></li>
                <li><Link href="/vision">Vision</Link></li>
                <li><Link href="/beliggenhed">Beliggenhed</Link></li>
                <li><Link href="/bygning">Bygning</Link></li>
                <li><Link href="/menu">Menu</Link></li>
                <li className={`header__mere mere ${isMereActive ? "active" : ""}`}
        onMouseOver={addMere}
        onClick={removeMere}
        ><a href="#">Mere</a>
                    <nav>
                        <ul className={`mere__ul ${isMereActive ? "active" : ""}`} id="mereUl">
                            <li><Link href="/folkene">Folkene</Link></li>
                            <li><Link href="/help">Frivillige, medlemmer og aktionærer </Link></li>
                            <li><Link href="/kontakt">Kontakt</Link></li>                    						
                        </ul>
                    </nav>
                </li>
                <li className="header__accordion">
                    <div className="accordion">
                        <div className="accordion__item">
                            <div className="accordion__header">
                                <a href="#">Mere</a>                                    
                                <span className="material-icons">expand_more</span>                                    
                            </div>
                            <div className="accordion__content">
                                <div className="desc accordion__description">
                                    <nav>
                                        <ul>
                                            <li><Link href="/folkene" className="desc">Folkene</Link></li>
                                            <li><Link href="/help" className="desc">Frivillige, medlemmer og aktionærer </Link></li>
                                            <li><Link href="/kontakt" className="desc">Kontakt</Link></li>                    						
                                        </ul>
                                    </nav>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </li>	
                <li><Link href="https://www.facebook.com/vaest.dk" target="_blank">
                    <img src="icons/Facebook.webp" alt="facebook"/>
                </Link>
                </li>
            </ul>
        </nav>
        <div className="header__burger" id="hamburger" onClick={navToggle}>						
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>			  
        </div>		
    </div>
    )

}