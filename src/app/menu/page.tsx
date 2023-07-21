import Link from "next/link";
import '../menu/menu.scss'

export default function Menu() {
    return (
        <>
            <div className="menuDesc-section">
                <h2 className="menuDesc-section__title">Menu</h2>
                <div className="menuDesc-section__info">
                    <p className="slogan menuDesc-section__slogan">Moderne lokalt dansk køkken</p>
                    <div className="menuDesc-section__desc">
                        <p className="desc">Menuen skal laves i tæt samarbejde med den køkkenchef der bliver ansat for én sæson ad gangen.</p>
                        <p className="desc">Der vil dog i hver sæson blive lagt særdeles vægt på konceptet om jordnær ambition, menuen og drikkevarer skal balancere noget enkelt lokalt og genkendeligt med ambitiøs klassisk elegance.</p>
                        <p className="desc">Køkkenchefen, eller parret, vil få ansvaret for al daglig drift igennem månederne juni, juli og august og vil blive aflønnet delvist med en fast løn og delvist med en del af overskuddet fra driften.</p>
                        <p className="desc">Hvis du mener at du passer på profilen som køkkenchef hos Væst, så <span><Link href="/kontakt">kontakt</Link></span> os.</p>
                        <p className="desc italic">Menuen nedenfor er blot til inspiration.</p>                         
                    </div> 
                    <Link href="/folkene" className="btn menuDesc-section__btn">Læs mere on folkene bag</Link>
                </div>                   
            </div>

            <div className="menu-section">
                <h3 className="menu-section__title"> Sommer ☀️</h3>
                <p className="slogan menu-section__slogan">Juni, juli og august menu.</p>
                {/* <div className="item menu-section__item">
                    <h4 className="item__title">Forretter</h4>
                    <div className="item__row">
                        <div className="item__card">
                            <img src="img/menu/foretter-1.jpg" alt="salad">
                            <div className="slogan item__desc">Væst</div>
                        </div>
                        <div className="item__card">
                            <img src="img/menu/foretter-2.jpg" alt="first course">
                            <div className="slogan item__desc">Væst</div>
                        </div>
                        <div className="item__card">
                            <img src="img/menu/foretter-3.jpg" alt="salad">
                            <div className="slogan item__desc">Væst</div>
                        </div>
                        <div className="item__card">
                            <img src="img/menu/foretter-4.jpg" alt="first course">
                            <div className="slogan item__desc">Væst</div>
                        </div>
                        <div className="item__card">
                            <img src="img/menu//foretter-5.jpg" alt="dish">
                            <div className="slogan item__desc">Væst</div>
                        </div>
                    </div>                    
                </div> */}

                {/* <div className="item menu-section__item">
                    <h4 className="item__title">Hovedret</h4>
                    <div className="item__row">
                        <div className="item__card">
                            <img src="img/menu/Hovedret-1.jpg" alt="fish">
                            <div className="slogan item__desc">Væst</div>
                        </div>
                        <div className="item__card">
                            <img src="img/menu/Hovedret-2.jpg" alt="second course">
                            <div className="slogan item__desc">Væst</div>
                        </div>
                        <div className="item__card">
                            <img src="img/menu/foretter-3.jpg" alt="fish">
                            <div className="sloganitem__desc">Væst</div>
                        </div>
                        <div className="item__card">
                            <img src="img/menu/Hovedret-4.jpg" alt="spaghetti">
                            <div className="slogan item__desc">Væst</div>                
                        </div>
                        <div className="item__card">
                            <img src="img/menu/Hovedret-5.jpg" alt="salad">
                            <div className="slogan item__desc">Væst</div>
                        </div>
                    </div>                    
                </div> */}

                {/* <div className="item menu-section__item">
                    <h4 className="item__title">Dessert</h4>
                    <div className="item__row">
                        <div className="item__card">
                            <img src="img/menu/dessert.jpg" alt="dessert">
                            <div className="desc item__desc">Væst</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
        
    )

}