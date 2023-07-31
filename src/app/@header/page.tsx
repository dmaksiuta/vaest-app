'use client'

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import '../@header/header.scss';
import Image from 'next/image'


import { mdiChevronDown } from '@mdi/js';

export default function Header() {
    const [isMereActive, setIsMereActive] = useState(false);

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
        const burgerBtn = document.getElementById("hamburger");

        if (headerUl && htmlElement && bodyElement && burgerBtn) {
            headerUl.classList.toggle("active");
            htmlElement.classList.toggle("overflow-hidden");
            bodyElement.classList.toggle("overflow-hidden");
            burgerBtn.classList.toggle("is-active");


            const links = headerUl.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                // Check if headerUl is active before removing "overflow-hidden" class from body and html
                if (headerUl.classList.contains("active")) {
                    htmlElement.classList.remove("overflow-hidden");
                    bodyElement.classList.remove("overflow-hidden");
                }
                // Close the headerUl after clicking on a link
                headerUl.classList.remove("active");
                burgerBtn.classList.remove("is-active");
            });
        });
        }
    }
    useEffect(() => {        
        const accordionItems = document.querySelectorAll('.accordion__item');
    
        const toggleItem = (item) => {
          const accordionContent = item.querySelector('.accordion__content');
          if (item.classList.contains('accordion-open')) {
            accordionContent.removeAttribute('style');
            item.classList.remove('accordion-open');
          } else {
            accordionContent.style.height = accordionContent.scrollHeight + 'px';
            item.classList.add('accordion-open');
          }
        };
    
        accordionItems.forEach((item) => {
          const accordionHeader = item.querySelector('.accordion__header');
    
          accordionHeader.addEventListener('click', () => {
            const openItem = document.querySelector('.accordion-open');
    
            toggleItem(item);
    
            if (openItem && openItem !== item) {
              toggleItem(openItem);
            }
          });
        });
      }, []);




    return (
        <div className="header">
        <Link href="/" className="header__logo">
            <Image width={80} height={40} src="/icons/logo.webp" alt="logo"/>
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
                                <div href="#">Mere</div>
                                <span><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                            >
                                <path d={mdiChevronDown} />
                            </svg></span>
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
                    <Image width={25} height={25} src="/icons/Facebook.webp" alt="facebook"/>
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
