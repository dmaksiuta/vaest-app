'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import '../@footer/footer.scss';

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {      
      setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="footer">
			<Link href="/" className="footer__logo">Væst</Link>
			<nav>
				<ul className="footer__contacts">
					<li><Link href="mailto:hej@væst.dk">hej@væst.dk</Link></li>
					<li><Link href="#">+357 97628675</Link></li>
					<li><Link href="https://goo.gl/maps/NnCWwAjnHrsVoRGb9" target="_blank">Gl. Amtsvej 39, Trend, 9670 Løgstør</Link>		
                    </li>
					<li><Link href="https://www.facebook.com/vaest.dk" target="_blank">
                        <img src="icons/Facebook.webp" alt="facebook"/>
                        </Link>
                    </li>					
				</ul>
			</nav>
            <div className="footer__copyright">	Copyright © 					
                <span>{currentYear}</span>
                Væst.
            </div>
	    </footer>
    )

}