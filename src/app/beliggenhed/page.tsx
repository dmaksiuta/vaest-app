'use client'

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import '../beliggenhed/beliggenhed.scss'
import Modal from "../modal/modal";




export default function Beliggenhed() {    
    const [modalOpen, setModalOpen] = useState(false);
    const [counter, setCounter] = useState(0);

    const openModal = () => {
        setModalOpen(true);
    }; 
    const closeModal = () => {
        setModalOpen(false);
      }; 

    //   const handleCounterClick = () => {
    //     console.log('Counter clicked!');
    //     setCounter(counter + 1);
    //   };
      
      
      useEffect(() => {
        const htmlElement = document.getElementById("html");
        const bodyElement = document.getElementById("body");

        if (modalOpen) {
            htmlElement.classList.add("overflow-hidden");
            bodyElement.classList.add("overflow-hidden");
        } else {
            htmlElement.classList.remove("overflow-hidden");
            bodyElement.classList.remove("overflow-hidden");
        }

        // Clean up the effect on component unmount
        return () => {
            htmlElement.classList.remove("overflow-hidden");
            bodyElement.classList.remove("overflow-hidden");
        };
    }, [modalOpen]);

    return (
        <div className="beliggenhed-section">                
            <div className="beliggenhed-section__info">
                <h2 className="beliggenhed-section__title">Beliggenhed</h2>
                <p className="slogan beliggenhed-section__slogan">Alle stier fører til stranden</p>
                <p className="desc beliggenhed-section__desc">En af de mange grunde til at Trend sommerhusområdet er elsket af mange, udover stranden naturligvis, er de utallige stisystemer der på kryds og tværs forbinder husene, og det synes at man til stadighed, selv efter et årti, kan finde nye ruter, men én ting er sikkert og vidst, alle stier fører til stranden, og her vil det være på sin plads hvis man kunne belønnes med en forfriskende is eller drink om sommeren samt en kop varm kaffe eller kakao om vinteren til synes af endeløse solnedgange over øerne Fur og Livø.</p>
                <Link href="https://goo.gl/maps/QaYyHaKGd5ByHRAC8" target="_blank" className="desc beliggenhed-section__link">Se beliggenheden af Væst på Google Maps</Link>
                <Link href="/bygning" className="btn beliggenhed-section__btn">Læs mere om bygningen</Link>
            </div>
            <div className="beliggenhed-section__row row">					
                <div className="row__card">
                    <img src="beliggenhed/map-1.webp" alt="map"/> 
                    <div className="row__content">
                        <div className="row__icons">
                            <div className="row__svg" onClick={()=>setCounter(counter+1)}>
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" onClick={()=>setCounter(counter+1)}/></svg>
                            </div>
                            <div className="row__counter">{counter}</div>
                            <img src="icons/arrow.svg" alt="share" onClick={openModal}/>
                        </div>                    
                    </div>                                           
                </div>
                <div className="row__card">                
                    <img src="beliggenhed/shore-1.webp" alt="seashore"/>
                    <div className="row__content">
                        <div className="row__icons">
                            <div className="row__svg" onClick={()=>setCounter(counter+1)}>
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" onClick={()=>setCounter(counter+1)}/></svg>
                            </div>
                            <div className="row__counter">{counter}</div>
                            <img src="icons/arrow.svg" alt="share" onClick={openModal}/>
                        </div>                    
                    </div> 
                                                            
                </div>
                <div className="row__card _yellow">                
                    <p>Bjørnholms Bugt</p>
                    <div className="row__content">
                        <div className="row__icons">
                            <div className="row__svg" onClick={()=>setCounter(counter+1)}>
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" onClick={()=>setCounter(counter+1)}/></svg>
                            </div>
                            <div className="row__counter">{counter}</div>
                            <img src="icons/arrow.svg" alt="share" onClick={openModal}/>
                        </div>                    
                    </div> 
                                                            
                </div>
                <div className="row__card">                
                    <img src="beliggenhed/sunset_1.webp" alt="sea sunset"/> 
                    <div className="row__content">
                        <div className="row__icons">
                            <div className="row__svg" onClick={()=>setCounter(counter+1)}>
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" onClick={()=>setCounter(counter+1)}/></svg>
                            </div>
                            <div className="row__counter">{counter}</div>
                            <img src="icons/arrow.svg" alt="share" onClick={openModal}/>
                        </div>                    
                    </div> 
                                                            
                </div>
                <div className="row__card"> 
                    <div className="video__play">
                        <img src="icons/play.svg" alt="play button"/>
                    </div>  
                    {/* <div className="video-container">
                        <video src="img/IMG_1968.mp4" preload="metadata" loop id="myVideo"></video>                    
                    </div>  */}
                    <img src="beliggenhed/video-poster.png" alt="seashore"/>
                    
                    <div className="row__content">
                        <div className="row__icons">
                            <div className="row__svg" onClick={()=>setCounter(counter+1)}>
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" onClick={()=>setCounter(counter+1)}/></svg>
                            </div>
                            <div className="row__counter">{counter}</div>
                            <img src="icons/arrow.svg" alt="share" onClick={openModal}/>
                        </div>                    
                    </div>                                                           
                </div>
                <div className="row__card">                
                    <img src="beliggenhed/map-2.webp" alt="map"/>  
                    <div className="row__content">
                        <div className="row__icons">
                            <div className="row__svg" onClick={()=>setCounter(counter+1)}>
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" onClick={()=>setCounter(counter+1)}/></svg>
                            </div>
                            <div className="row__counter">{counter}</div>
                            <img src="icons/arrow.svg" alt="share" onClick={openModal}/>
                        </div>                    
                    </div>                                         
                </div>
                <div className="row__card _dark">                
                    <p>God Parkering</p>
                    <div className="row__content">
                        <div className="row__icons">
                            <div className="row__svg" onClick={()=>setCounter(counter+1)}>
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" onClick={()=>setCounter(counter+1)}/></svg>
                            </div>
                            <div className="row__counter">{counter}</div>
                            <img src="icons/arrow.svg" alt="share" onClick={openModal}/>
                        </div>                    
                    </div>                                       
                </div>
                <div className="row__card">                
                    <img src="beliggenhed/shore-2_1.webp" alt="seashore"/> 
                    <div className="row__content">
                        <div className="row__icons">                            
                            <div className="row__svg" onClick={()=>setCounter(counter+1)}>
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" onClick={()=>setCounter(counter+1)}/></svg>
                            </div>                           
                            <div className="row__counter">{counter}</div>
                            <img src="icons/arrow.svg" alt="share" onClick={openModal}/>
                        </div>                    
                    </div>                                           
                </div>
            </div>
            <Modal closeModal={closeModal} modalOpen={modalOpen} />
        </div>
        
    )

}