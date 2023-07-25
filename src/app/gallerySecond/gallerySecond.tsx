'use client'

import React, { useState, useEffect } from 'react';
import '../gallerySecond/gallerySecond.scss'
import Modal from "../modal/modal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';


export default function GallerySecond({ isActive, deactivateGallery }) {    
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
        <div className={`gallerySecond ${isActive ? 'active' : ''}`}>               
            <div className="gallerySecond__header">
            <div className="gallerySecond__expand" onClick={deactivateGallery}>
                    <img src="icons/expand.svg" alt="expand icon" />                    
                </div>
                <div className="gallerySecond__icons">
                    <img src="icons/arrow-black.svg" alt="share icon" onClick={openModal}/>
                    <div className="gallerySecond__svg" onClick={()=>setCounter(counter+1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" onClick={()=>setCounter(counter+1)}/></svg>
                    </div>
                    <div className="gallerySecond__counter">{counter}</div>                
                </div>
                <div className="gallerySecond__close" onClick={deactivateGallery}>
                    <img src="icons/close.svg" alt="close icon" />                    
                </div> 
            </div>
            <div className="gallerySecond__swiper">
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
                            <div className="gallerySecond__content">
                                <img src="beliggenhed/map-1.webp" alt="map"/> 
                            </div> 
                        </SwiperSlide>
                        <SwiperSlide>                                            
                            <div className="gallerySecond__content">
                                <img src="beliggenhed/shore-1.webp" alt="seashore"/> 
                            </div> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallerySecond__content _yellow">
                                <p>Bjørnholms Bugt</p> 
                            </div> 
                        </SwiperSlide>
                        <SwiperSlide>                                            
                            <div className="gallerySecond__content">
                                <img src="beliggenhed/sunset_1.webp" alt="sea sunset"/> 
                            </div> 
                        </SwiperSlide>
                        <SwiperSlide>                                            
                            <div className="gallerySecond__content">
                                <img src="beliggenhed/video-poster.png" alt="seashore"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>                                            
                            <div className="gallerySecond__content">
                                <img src="beliggenhed/map-2.webp" alt="map"/> 
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>                                            
                            <div className="gallerySecond__content _dark">
                                <p>God Parkering</p> 
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>                                            
                            <div className="gallerySecond__content">
                                <img src="beliggenhed/shore-2_1.webp" alt="seashore"/>  
                            </div>
                        </SwiperSlide>
                        
                        
                </Swiper>
            </div>            
            <Modal closeModal={closeModal} modalOpen={modalOpen} />
        </div>
        
    )

}