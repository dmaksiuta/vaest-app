'use client'

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import '../gallery/gallery.scss'
import Modal from "../modal/modal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';


export default function Gallery({ isActive, deactivateGallery }) {    
    const [modalOpen, setModalOpen] = useState(false);
    const [counter, setCounter] = useState(0);

    const openModal = () => {
        setModalOpen(true);
    }; 
    const closeModal = () => {
        setModalOpen(false);
      };
      
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
        <div className={`gallery ${isActive ? 'active' : ''}`}>               
            <div className="gallery__header">
            <div className="gallery__expand" onClick={deactivateGallery}>
                    <img src="icons/expand.svg" alt="expand icon" />                    
                </div>
                <div className="gallery__icons">
                    <img src="icons/arrow-black.svg" alt="share icon" onClick={openModal}/>
                    <div className="gallery__svg" onClick={()=>setCounter(counter+1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" onClick={()=>setCounter(counter+1)}/></svg>
                    </div>
                    <div className="gallery__counter">{counter}</div>                
                </div>
                <div className="gallery__close" onClick={deactivateGallery}>
                    <img src="icons/close.svg" alt="close icon" />                    
                </div> 
            </div>
            <div className="gallery__swiper">
                <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        spaceBetween={20}
                        slidesPerView={1}                                 
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}      
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="gallery__picture picture">                
                                <img src="main-bg-1.jpg" alt="restaurant building"/> 
                                <div className='picture__small'>
                                    <img src="no57_logo.png" className='picture__small' alt="number 57" />
                                </div>                               
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery__picture picture">               
                                <img src="main-bg-2.jpg" alt="restaurant building"/> 
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery__picture picture">               
                                <img src="main-bg-3.jpg" alt="restaurant building"/> 
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>            
            <Modal closeModal={closeModal} modalOpen={modalOpen} />
        </div>
        
    )

}