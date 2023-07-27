'use client'

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import '../bygning/bygning.scss'
import Modal from "../modal/modal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import Gallery from '../gallery/gallery';
import Image from 'next/image'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Bygning() {
	const [modalOpen, setModalOpen] = useState(false);
	const [counter, setCounter] = useState(0);
	const [galleryActive, setGalleryActive] = useState(false);

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

	const toggleGallery = () => {
		setGalleryActive(!galleryActive);
	};

	const deactivateGallery = () => {
		setGalleryActive(false);
	};

	return (
		<div className="bygning-section">
			<div className="bygning-section__info">
				<h2 className="bygning-section__title">Bygningen</h2>
				<p className="slogan bygning-section__slogan">Klassisk badehotel stil</p>
				<div className="bygning-section__desc">
					<p className="desc">Vertikale lysegrå en på to beklædning med hvide træ vinduer, antracit farvet fladt tag (tagpap) med svag hældning mod øst, måske med et lille knæk mod vest og med enkelte lysindfald. Taget skal have solpaneler og sikre at stedet kan være selvforsynende med strøm året rundt.</p>
					<p className="desc">Kunne også være en mulighed med en standard tagryg hvis ikke højden bliver et problem. Det vil give et mere klassisk udtryk.</p>
					<p className="desc">Stedet skal oplyses af en svag grundbelysning af indirekte led lys i varm hvid udenpå og indenfor, døgnet rundt og året rundt.</p>
					<p className="desc">Nordvest for bygningen skal være en stor have med enkelte frugttræer en stor flagstang med Dannebrog og borde bænke til dem som ikke ønsker at besøge restauranten, men blot nyde en is og kaffe efter et besøg på stranden.</p>
					<p className="desc">Bygningen kunne være et L, lidt som den gamle købmand er det i dag.</p>
					<p className="desc">I den første del mod nord skal restauranten være, stort åbent rum uden søjler. Bygningen skal have fuld kælder som ligger en halv etage over/under jorden, måske ikke i hele grundplan, men gerne halvdelen, kan lægges hvor som helst så længe der er adgang fra øst, skal bruges til køl og prep. Vare nedkørsel mod øst. Skal have et enkelt toilet til personalet.</p>
					<p className="desc">En trappe mod nord leder gæster en halv etage op til hovedindgangen, som er i en fransk dobbelt dør stil, vil se indbydende ud døgnet rundt og året rundt. Gæster træder ind i en rummelig entre hvor der hænger historiske billeder fra området m.v. Muligvis et par toiletter, primært til gæsterne i haven.</p>
					<p className="desc">Mod øst er et stort åbent langt (anretter) køkken og bar ud i et med tydelige elementer af varme metal farver som bronze eller kobber og udgang bagved til en udvendig trappe til kælderen.</p>
					<p className="desc">Mod vest er en kæmpe altan (hævet en halv etage over jorden) med store vinduespartier mod restauranten som kan åbnes og lukkes efter behov.</p>
					<p className="desc">Mod syd er en afdeling som er forbundet af en opaque dobbeltdør til restauranten. Afdelingen er tiltænkt 4 værelser mod øst og en stor fællesstue mod vest med lofthængt pejs og stort glasparti mod vest. I denne del skal der også være 2 store lækre toiletter til sovende gæster samt til restaurantens gæster (herre / dame). Samt et stort familie badeværelse med 2 brusere.</p>
					<p className="desc">Afdelingen kan bruges til overnattende gæster efter et privat arrangement, samt som “cognac stue” efter et besøg i restauranten eller et special arrangement.</p>
					<p className="desc">Under altanen/terrassen mod nord vest skal være et lille cafe/ishus serveringsvindue som eventuelt er sænket lidt med nogle trin eller eventuelt kapper vi noget af terrassen. Det er for at servicere ikke restaurantgæster i sæsonen.</p>
				</div>
				<Link href="/menu" className="btn bygning-section__btn">Læs mere om Menuen</Link>
			</div>
			<div className="bygning-section__carousel">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar]}
					spaceBetween={20}
					breakpoints={{
						320: {
							slidesPerView: 1,
							spaceBetween: 0,
						},
						576: {
							slidesPerView: 1.2,
							spaceBetween: 20,
						}
					}}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide>
						<div className="bygning-section__picture picture" onClick={toggleGallery}>
							<Image width={995} height={559} src="/main-bg-1.jpg" alt="restaurant building" />
							<div className='picture__small'>
								<Image width={70} height={40} src="/no57_logo.png" className='picture__small' alt="number 57" />
							</div>
							<div className="picture__content">
								<div className="picture__icons">
									<div className="picture__svg" onClick={() => setCounter(counter + 1)}>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" onClick={() => setCounter(counter + 1)} /></svg>
									</div>
									<div className="picture__counter">{counter}</div>
									<Image width={24} height={24} src="/icons/arrow-black.svg" alt="share icon" onClick={openModal} />
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bygning-section__picture picture">
							<Image width={995} height={559} src="/main-bg-2.jpg" alt="restaurant building" />
							<div className="picture__content">
								<div className="picture__icons">
									<div className="picture__svg" onClick={() => setCounter(counter + 1)}>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" onClick={() => setCounter(counter + 1)} /></svg>
									</div>
									<div className="picture__counter">{counter}</div>
									<Image width={24} height={24} src="/icons/arrow-black.svg" alt="share icon" onClick={openModal} />
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bygning-section__picture picture">
							<Image width={995} height={559} src="/main-bg-3.jpg" alt="restaurant building" />
							<div className="picture__content">
								<div className="picture__icons">
									<div className="picture__svg" onClick={() => setCounter(counter + 1)}>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" onClick={() => setCounter(counter + 1)} /></svg>
									</div>
									<div className="picture__counter">{counter}</div>
									<Image width={24} height={24} src="/icons/arrow-black.svg" alt="share icon" onClick={openModal} />
								</div>
							</div>
						</div>
					</SwiperSlide>

				</Swiper>
			</div>

			<Modal closeModal={closeModal} modalOpen={modalOpen} />
			<Gallery isActive={galleryActive} deactivateGallery={deactivateGallery} />

		</div>

	)

}
