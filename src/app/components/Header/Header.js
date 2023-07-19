import '../Header/Header.scss'

export default function Header() {
  return (
    
    <header class="header">
    {/* <a href="index.html" class="header__logo">
        <img src="img/icons/logo.webp" alt="logo">
    </a> */}
    <nav class="header__nav">
        <ul class="header__ul" id="headerUl">
            <li><a href="index.html">Start</a></li>
            <li><a href="baggrund.html">Baggrund</a></li>
            <li><a href="vision.html">Vision</a></li>
            <li><a href="beliggenhed.html">Beliggenhed</a></li>
            <li><a href="bygning.html">Bygning</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li class="header__mere mere" onmouseover="addMere()" onclick="removeMere()"><a href="#">Mere</a>
                <nav>
                    <ul class="mere__ul" id="mereUl">
                        <li><a href="folkene.html">Folkene</a></li>
                        <li><a href="help.html">Frivillige, medlemmer og aktionærer </a></li>
                        <li><a href="kontakt.html">Kontakt</a></li>                    						
                    </ul>
                </nav>
            </li>
            <li class="header__accordion">
                <div class="accordion">
                    <div class="accordion__item">
                        <div class="accordion__header">
                            <a href="#">Mere</a>                                    
                            <span class="material-icons">expand_more</span>                                    
                        </div>
                        <div class="accordion__content">
                            <div class="desc accordion__description">
                                <nav>
                                    <ul>
                                        <li><a href="folkene.html" class="desc">Folkene</a></li>
                                        <li><a href="help.html" class="desc">Frivillige, medlemmer og aktionærer </a></li>
                                        <li><a href="kontakt.html" class="desc">Kontakt</a></li>                    						
                                    </ul>
                                </nav>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </li>	
            {/* <li><a href="https://www.facebook.com/vaest.dk" target="_blank">
                <img src="img/icons/Facebook.webp" alt="facebook">
            </a>
            </li> */}
        </ul>
    </nav>
    <div class="header__burger" id="hamburger" onclick="navToggle()">						
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>			  
    </div>		
    </header>
    
  )
}