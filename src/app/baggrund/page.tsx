import Link from "next/link";
import '../baggrund/baggrund.scss'

export default function Baggrund() {
    return (
        <div className="baggrund-section">
            <img src="baggrund.jpg" alt="people on the seashore"/>
            <div className="baggrund-section__info">
                <h3 className="baggrund-section__title">Baggrund</h3>
                <p className="slogan baggrund-section__slogan">"Nogen burde gøre noget..."</p>
                <div className="baggrund-section__desc">
                    <p className="desc">En sygeplejerske fra Viborg og hendes civilingeniør mand, begge født og opvokset i Danmark med en ud-over-det-sædvanlige passion for god mad og madoplevelser, forlod Viborg tilbage i 2011 for at bosætte sig på Malta, senere i 2019 blev det til Cypern hvor de fortsat bor og er sultne efter at udforske verdens kulinariske hjørner.</p>
                    <p className="desc">Jo flere år de tilbringer væk fra fødelandet, desto stærkere bliver kærligheden til Danmark og gradvist udvikler sig en drøm, om at lave en bedre dansk spiseoplevelse i det sommerhusområde hvor de har tilbragt alle deres danske somre siden de udflyttede — Trend ved Limfjorden.</p>
                    <p className="desc">Siden 2011 er de utallige gange gået forbi den gamle købmand og tænkt at det da er en utrolig central og lækker placering, "nogen burde gøre noget...".</p>
                    <p className="desc">I marts 2022 købte de så selv den tidligere købmand med deres vision for øje.</p>
                </div>
                <Link href="/vision" className="btn baggrund-section__btn">Læs mere om visionen</Link>
            </div>                
        </div>
        
    )

}