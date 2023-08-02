'use client'

import React, { useState, useEffect } from 'react';
import '../gallerySecond/gallerySecond.scss'
import Modal from "../modal/modal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import Image from 'next/image'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function GallerySecond({ isActive, deactivateGallery }: any) {
	const [modalOpen, setModalOpen] = useState(false);
	const [counter, setCounter] = useState(0);
	const [fullScreen, setFullScreen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};
	const closeModal = () => {
		setModalOpen(false);
	};
	
	useEffect(() => {
		console.log(isActive, fullScreen)
	}, [modalOpen]);

	useEffect(() => {
		const htmlElement = document.getElementById("html");
		const bodyElement = document.getElementById("body");
		if (htmlElement && bodyElement) {
			if (modalOpen) {
				htmlElement.classList.add("overflow-hidden");
				bodyElement.classList.add("overflow-hidden");
			} else {
				htmlElement.classList.remove("overflow-hidden");
				bodyElement.classList.remove("overflow-hidden");
			}
		}


		// Clean up the effect on component unmount
		return () => {
			if (htmlElement && bodyElement) {
				htmlElement.classList.remove("overflow-hidden");
				bodyElement.classList.remove("overflow-hidden");
			}
		};
	}, [modalOpen]);


	const toggleFullScreen = () => {
		setFullScreen(!fullScreen);
	  };
	
	  const expandGallery = () => {
		setFullScreen(!fullScreen); // Toggle fullScreen state on expand click
	  };

	return (
		<div className={`gallerySecond ${isActive ? 'active' : ''}`}>
			<div className="gallerySecond__header">
				<div className={`gallerySecond__expand ${fullScreen ? "fullScreen" : ""}`} onClick={expandGallery}>
					<Image width={35} height={35} src="/icons/expand.svg" alt="expand icon" />
				</div>
				<div className="gallerySecond__icons">
					<Image width={24} height={24} src="/icons/arrow-black.svg" alt="share icon" onClick={openModal} />
					<div className="gallerySecond__svg" onClick={() => setCounter(counter + 1)}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" onClick={() => setCounter(counter + 1)} /></svg>
					</div>
					<div className="gallerySecond__counter">{counter}</div>
				</div>
				<div className="gallerySecond__close" onClick={deactivateGallery}>
					<Image width={35} height={35} src="/icons/close.svg" alt="close icon" />
				</div>
			</div>
			<div className={`gallerySecond__swiper ${fullScreen ? "fullScreen" : ""}`}>
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
						<div className={`gallerySecond__content ${
                isActive && fullScreen ? "fullScreen" : ""
              }`}>
							<Image width={894} height={600} src="/beliggenhed/map-1.webp" alt="map" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`gallerySecond__content ${
                isActive && fullScreen ? "fullScreen" : ""
              }`}>
							<Image width={894} height={600} src="/beliggenhed/shore-1.webp" alt="seashore" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`gallerySecond__content _yellow ${
                isActive && fullScreen ? "fullScreen" : ""
              }`}>
							<p>Bjørnholms Bugt</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`gallerySecond__content ${
                isActive && fullScreen ? "fullScreen" : ""
              }`}>
							<Image width={894} height={600} src="/beliggenhed/sunset_1.webp" alt="sea sunset" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`gallerySecond__content ${
                isActive && fullScreen ? "fullScreen" : ""
              }`}>							
							<div className="video-container">
								{/* <video width={894} height={600} src="/beliggenhed/video-vaest.mp4" preload="metadata" autoPlay muted controls id="myVideo"></video> */}
								<video width={894} height={600} src="https://video-downloads.googleusercontent.com/AMIVHOMuz6BaI3hnBd2Lwa2OY2AEJ9YOkwhdPgzQ-V8wejB2liLAe8R834BVyZ8z1iFQHaCNGRkU-CCXpKdFsxlPGZjpitAH_q1cPIUVRKKpgYrZklcUTew0tb3Zq6hA4vicAWG-PMPvuAqZHfJHLOJ7fSmvftAV_0grL_Db3mb-kQe47XD63SuaRFG5Oa7VjO7FZaOUHfSNcQSOlJtsNjWxwqcXoXd_e1z-c2hLD3KufKNC_dqB9e6x1L0kZErF3-nnmYigIrjaRPwnayZeRHD7-Ho-75C3FJXDRFMqKZmitvJQl2nh7_yeQwGXHaSaVC89Aamlvrb8M0U6Piy7jmJv_kn34Px6CrVnFC1-8qIpy4-nLANwQaznEYAFJzI_xeqqrbKjM5paMJIH0TREHPDYn73ib5Pr0ZMNoaDR26JYwdil2poOkcdi5kkcRGdZWof_FvRo6ZdlJ4fjc6QBagP7sbMN8W8-3Hhgk13DuCsgWj1OmSM3QxdzxDOGGq-O0-tknfbHQeJBmS6nXw6Nhy92FvcTbOGvMHy48Fss5TzDCzLQRUpnFumToPyo52ivjZ8yg-nwPLMJC-T95_73NSQijjGYlhhsHf4H8TnM667Wkkneh5ZZ4AQAP2zaOGHKs4CeOL0ycWRE9OKrXKUWVOHgMxkU-U3cBiF9tdj_95yPdRW2c5p_B6uH3u9wMsSUAQ85T7inJr9Cc559caRO5NmCtcFK0E9b7044YQ0nlhX9MXQOA_GNPJtVXI4OuUGRTKC_KJ8kkzfwFmxEM0QUK6tVKChNrJH_odLk6JRjL3vSCUvJPdrmM3jUtSwVvcgFKt9ZN_FcQBDes64E06sQPN_1ylk7pp-LlX3wsNLOHn1I63lbf90KzHQaCwpMWYBVCyCkNNkrS4J5vsQ5YMJWOD0IvQ87O0boT2dWrv9UB8XuOMvAJ4oHunw0EF1-kehjsBGYPtl6OSm4B9y6A1Wi4Wh81o-dsxgkfnZxNNW6Dt6FN_lUUcQ2iHKcnrcSflXM7lmuMpIC6q_dmNsGYpEMMY6Tvmeo8Lsd-Tn4HKhlIYQ--keXn06rwi3UoJQQAAFGldFayGD9wzaK?authuser=0" preload="metadata" autoPlay muted controls id="myVideo"></video>
							</div>  
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`gallerySecond__content ${
                isActive && fullScreen ? "fullScreen" : ""
              }`}>
							<Image width={894} height={600} src="/beliggenhed/map-2.webp" alt="map" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`gallerySecond__content _dark ${
                isActive && fullScreen ? "fullScreen" : ""
              }`}>
							<p>God Parkering</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`gallerySecond__content ${
                isActive && fullScreen ? "fullScreen" : ""
              }`}>
							<Image width={894} height={600} src="/beliggenhed/shore-2_1.webp" alt="seashore" />
						</div>
					</SwiperSlide>


				</Swiper>
			</div>
			<Modal closeModal={closeModal} modalOpen={modalOpen} />
		</div>

	)

}
