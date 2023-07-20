export default function Header() {
    return (
        <div className="header">
        <a href="index.html" className="header__logo">
            {/* <img src="img/icons/logo.webp" alt="logo"> */}
        </a>
        <nav className="header__nav">
            <ul className="header__ul" id="headerUl">
                <li><a href="index.html">Start</a></li>
                <li><a href="/baggrund">Baggrund</a></li>
                <li><a href="/vision">Vision</a></li>
                <li><a href="/beliggenhed">Beliggenhed</a></li>
                <li><a href="/bygning">Bygning</a></li>
                <li><a href="menu.html">Menu</a></li>
                <li className="header__mere mere" onmouseover="addMere()" onclick="removeMere()"><a href="#">Mere</a>
                    <nav>
                        <ul className="mere__ul" id="mereUl">
                            <li><a href="folkene.html">Folkene</a></li>
                            <li><a href="help.html">Frivillige, medlemmer og aktionærer </a></li>
                            <li><a href="kontakt.html">Kontakt</a></li>                    						
                        </ul>
                    </nav>
                </li>
                <li className="header__accordion">
                    <div className="accordion">
                        <div className="accordion__item">
                            <div className="accordion__header">
                                <a href="#">Mere</a>                                    
                                <span className="material-icons">expand_more</span>                                    
                            </div>
                            <div className="accordion__content">
                                <div className="desc accordion__description">
                                    <nav>
                                        <ul>
                                            <li><a href="folkene.html" className="desc">Folkene</a></li>
                                            <li><a href="help.html" className="desc">Frivillige, medlemmer og aktionærer </a></li>
                                            <li><a href="kontakt.html" className="desc">Kontakt</a></li>                    						
                                        </ul>
                                    </nav>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </li>	
                <li><a href="https://www.facebook.com/vaest.dk" target="_blank">
                    {/* <img src="img/icons/Facebook.webp" alt="facebook"> */}
                </a>
                </li>
            </ul>
        </nav>
        <div className="header__burger" id="hamburger" onclick="navToggle()">						
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>			  
        </div>		
    </div>
    )

}