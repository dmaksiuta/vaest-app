'use client'

import React, { useState } from 'react';
import { mdiClose } from '@mdi/js';
import '../scss/utils/_modal.scss';

export default function Modal({closeModal, modalOpen}) {
    
    return (
        <div className={`pop-up ${modalOpen ? 'active' : ''}`} id="popUp">
        <div className="pop-up__container">
            <div className="pop-up__body">
                <div className="pop-up__socials">
                    <a href="https://www.facebook.com/" target="_blank"><img src="icons/socials/facebook.svg" alt="facebook"/></a>
                    <a href="https://twitter.com/" target="_blank"><img src="icons/socials/twitter.svg" alt="twitter"/></a>
                    <a href="https://www.pinterest.com/" target="_blank"><img src="icons/socials/pinterest.svg" alt="pinterest"/></a>
                    <a href="https://www.tumblr.com/" target="_blank"><img src="icons/socials/tumblr.svg" alt="tumblr"/></a>
                    <a href="mailto:hej@væst.dk"><img src="icons/socials/mail.svg" alt="email"/></a> 
                </div>
                <div className="pop-up__input">
                    <input type="text" value="https://www.xn--vst-yla.dk/beliggenhed?pgid=l6kyjvqg-45f10bbd-0b3b-4b6a-b135-223c6d262fa3" id="myInput" readOnly/>
                    <button>
                        <img src="icons/copy.svg" alt="copy link"/>
                    </button>
                </div>
                
                <div className="pop-up__close" id="closePopUp" onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        >
                        <path d={mdiClose} />
                    </svg>
                </div>
            </div>
        </div>
    </div>

    )

}