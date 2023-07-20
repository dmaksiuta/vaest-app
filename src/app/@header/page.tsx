import Link from "next/link";


export default function Header() {
    return (
        <div className="header">
        <Link href="/" className="header__logo">
            {/* <img src="img/icons/logo.webp" alt="logo"> */}
        </Link>
        

        <nav className="header__nav">
            <ul className="header__ul" id="headerUl">
                <li><a href="/">Start</a></li>
                <li><Link href="/baggrund">Baggrund</Link></li>
                <li><Link href="/vision">Vision</Link></li>
                <li><Link href="/beliggenhed">Beliggenhed</Link></li>
                <li><Link href="/bygning">Bygning</Link></li>
                <li><Link href="/menu">Menu</Link></li>
                <li className="header__mere mere" onmouseover="addMere()" onclick="removeMere()"><a href="#">Mere</a>
                    <nav>
                        <ul className="mere__ul" id="mereUl">
                            <li><Link href="/folkene">Folkene</Link></li>
                            <li><Link href="/help">Frivillige, medlemmer og aktionærer </Link></li>
                            <li><Link href="/kontakt">Kontakt</Link></li>                    						
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
                                            <li><Link href="/folkene" className="desc">Folkene</Link></li>
                                            <li><Link href="/help" className="desc">Frivillige, medlemmer og aktionærer </Link></li>
                                            <li><Link href="/kontakt" className="desc">Kontakt</Link></li>                    						
                                        </ul>
                                    </nav>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </li>	
                <li><Link href="https://www.facebook.com/vaest.dk" target="_blank">
                    {/* <img src="img/icons/Facebook.webp" alt="facebook"> */}
                </Link>
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