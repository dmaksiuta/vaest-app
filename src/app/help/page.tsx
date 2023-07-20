import Link from "next/link";

export default function Help() {
    return (
        <div className="help-section">
            <h3 className="help-section__title">Hjælp os</h3>
            <p className="slogan help-section__slogan">Bliv en vigtig og helt nødvendig del af projektet</p>
            <div className="help-section__row row">
                <div className="row__card _black">
                    <h4 className="row__title">Som frivillig</h4> 
                    <div className="slogan row__slogan">Hjælp til når det passer dig</div>
                    <div className="desc row__desc">Følg med på vores Facebook side <span><Link href="https://www.facebook.com/vaest.dk" target="_blank">her</Link></span>.</div>	                                       
                </div>
                <div className="row__card _grey">
                    <h4 className="row__title">Som medlem</h4> 
                    <div className="slogan row__slogan">Få adgang til Væst med egen kode udenfor sommer sæsonen</div>
                    <div className="desc row__desc">Du kan først blive medlem når Væst åbner.</div>	                                       
                </div>
                <div className="row__card _blue">
                    <h4 className="row__title">Som aktionær 👑</h4> 
                    <div className="slogan row__slogan">Få store rabatter samt muligheden for at reservere Væst til private arrangementer</div>
                    <div className="desc row__desc">Vi er klar til aktionærer senere i 2022.</div>	                                       
                </div>
            </div>
            <div className="help-section__footer footer">
                <div className="slogan footer__slogan">Ønsker du mere information</div>
                <Link href="/kontakt" className="btn help-section__btn">Kontakt os</Link>
            </div>
        </div>
        
        
    )

}