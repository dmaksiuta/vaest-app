"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../gallery/gallery.scss";
import Modal from "../modal/modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import Image from "next/image";

export default function Gallery({ isActive, deactivateGallery }: any) {
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
		<div className={`gallery ${isActive ? "active" : ""}`}>
			<div className="gallery__header">
				<div className={`gallery__expand ${fullScreen ? "fullScreen" : ""}`} onClick={expandGallery}>
					<Image
						width={35}
						height={35}
						src="/icons/expand.svg"
						alt="expand icon"
					/>
				</div>
				<div className="gallery__icons">
					<Image
						width={24}
						height={24}
						src="/icons/arrow-black.svg"
						alt="share icon"
						onClick={openModal}
					/>
					<div
						className="gallery__svg"
						onClick={() => setCounter(counter + 1)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 256 256"
						>
							<rect width="256" height="256" fill="none" />
							<path
								d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z"
								fill="none"
								stroke="#000"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="8"
								onClick={() => setCounter(counter + 1)}
							/>
						</svg>
					</div>
					<div className="gallery__counter">{counter}</div>
				</div>
				<div className="gallery__close" onClick={deactivateGallery}>
					<Image
						width={35}
						height={35}
						src="/icons/close.svg"
						alt="close icon"
					/>
				</div>
			</div>
			<div className={`gallery__swiper ${fullScreen ? "fullScreen" : ""}`}>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar]}
					spaceBetween={20}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide>
						<div className={`gallery__picture picture ${
                isActive && fullScreen ? "fullScreen" : ""
              }`}>
							<Image
								width={894}
								height={502}
								src="/main-bg-1.jpg"
								alt="restaurant building"
							/>
							<div className="picture__small">
								<Image
									width={70}
									height={40}
									src="/no57_logo.png"
									className="picture__small"
									alt="number 57"
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`gallery__picture picture ${
                isActive && fullScreen ? "fullScreen" : ""
              }`}>
							<Image
								width={894}
								height={502}
								src="/main-bg-2.jpg"
								alt="restaurant building"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`gallery__picture picture ${
                isActive && fullScreen ? "fullScreen" : ""
              }`}>
							<Image
								width={894}
								height={502}
								src="/main-bg-3.jpg"
								alt="restaurant building"
							/>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
			<Modal closeModal={closeModal} modalOpen={modalOpen} />
		</div>
	);
}
