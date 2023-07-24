import Link from "next/link";
import '../beliggenhed/beliggenhed.scss'
import Modal from "../modal/modal";

export default function Beliggenhed() {
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
                            <img src="icons/like.svg" alt="like"/>
                            <img src="icons/arrow.svg" alt="share" onclick="popup(this)"/>
                        </div>                    
                    </div>                                           
                </div>
            <div className="row__card">                
                <img src="beliggenhed/shore-1.webp" alt="seashore"/>
                <div className="row__content">
                    <div className="row__icons">
                        <img src="icons/like.svg" alt="like"/>
                        <img src="icons/arrow.svg" alt="share" onclick="popup(this)"/>
                    </div>                    
                </div> 
                                                           
            </div>
            <div className="row__card _yellow">                
                <p>Bjørnholms Bugt</p>
                <div className="row__content">
                    <div className="row__icons">
                        <img src="icons/like.svg" alt="like"/>
                        <img src="icons/arrow.svg" alt="share" onclick="popup(this)"/>
                    </div>                    
                </div> 
                                                        
            </div>
            <div className="row__card">                
                <img src="beliggenhed/sunset_1.webp" alt="sea sunset"/> 
                <div className="row__content">
                    <div className="row__icons">
                        <img src="icons/like.svg" alt="like"/>
                        <img src="icons/arrow.svg" alt="share" onclick="popup(this)"/>
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
                        <img src="icons/like.svg" alt="like"/>
                        <img src="icons/arrow.svg" alt="share" onclick="popup(this)"/>
                    </div>                    
                </div>                                                           
            </div>
            <div className="row__card">                
                <img src="beliggenhed/map-2.webp" alt="map"/>  
                <div className="row__content">
                    <div className="row__icons">
                        <img src="icons/like.svg" alt="like"/>
                        <img src="icons/arrow.svg" alt="share" onclick="popup(this)"/>
                    </div>                    
                </div>                                         
            </div>
            <div className="row__card _dark">                
                <p>God Parkering</p>
                <div className="row__content">
                    <div className="row__icons">
                        <img src="icons/like.svg" alt="like"/>
                        <img src="icons/arrow.svg" alt="share" onclick="popup(this)"/>
                    </div>                    
                </div>                                       
            </div>
            <div className="row__card">                
                <img src="beliggenhed/shore-2_1.webp" alt="seashore"/> 
                <div className="row__content">
                    <div className="row__icons">
                        <img src="icons/like.svg" alt="like"/>
                        <img src="icons/arrow.svg" alt="share" onclick="popup(this)"/>
                    </div>                    
                </div>                                           
            </div>
            </div>


            <Modal /> 
        </div>
        
    )

}