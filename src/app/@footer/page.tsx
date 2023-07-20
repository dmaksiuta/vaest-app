export default function Footer() {
    return (
        <footer className="footer">
			<a href="#" className="footer__logo">Væst</a>
			<nav>
				<ul className="footer__contacts">
					<li><a href="mailto:hej@væst.dk">hej@væst.dk</a></li>
					<li><a href="#">+357 97628675</a></li>
					<li><a href="https://goo.gl/maps/NnCWwAjnHrsVoRGb9" target="_blank">Gl. Amtsvej 39, Trend, 9670 Løgstør</a>		
                    </li>
					<li><a href="https://www.facebook.com/vaest.dk" target="_blank">
                        {/* <img src="img/icons/Facebook.webp" alt="facebook"> */}
                        </a>
                    </li>					
				</ul>
			</nav>
            <div className="footer__copyright">	Copyright ©					
                <span id="footer-year"></span>
                Væst.
            </div>
	    </footer>
    )

}