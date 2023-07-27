import Link from "next/link";
import '../kontakt/kontakt.scss'
import Image from 'next/image'

export default function Kontakt() {
    return (
        <div className="kontakt-section">
            <Image width={1358} height={580} src="/kontakt.webp" alt="making photos of sea sunset"/>
            <div className="kontakt-section__info">
                <h3 className="kontakt-section__title">Kontakt</h3>
                <div className="desc kontakt-section__desc">Vi anbefaler at du følger med på vores Facebook side <span><Link href="https://www.facebook.com/vaest.dk" target="_blank">her</Link></span> for at få den seneste information om projektet.</div>
                <div className="desc kontakt-section__desc">Du kan også kontakte <span><Link href="/folkene">folkene</Link></span> bag direkte for mere specifikke henvendelser.</div>
                <form action="get" className="kontakt-section__form">
                    <div className="kontakt-section__row">
                        <label className="field desc">
                            <span className="field__title">Fornavn *</span>
                            <input type="text" className="field__input" placeholder="Dit fornavn f.eks. Peter" required/>
                        </label>
                        <label className="field desc">
                            <span className="field__title">Efternavn *</span>
                            <input type="text" className="field__input" placeholder="Dit efternavn f.eks. Sørensen" required/>
                        </label>

                    </div>
                    <label className="field desc">
                        <span className="field__title">Email *</span>
                        <input type="email" className="field__input" placeholder="Din email f.eks. peter@gmail.com"/>
                    </label>
                    <label className="field desc">
                        <span className="field__title">Besked *</span>
                        <textarea  className="field__textarea" placeholder="Din besked til os" rows={10} required></textarea>
                    </label>
                    <button type="submit" className="btn desc kontakt-section__btn">Send</button>

                </form>
            </div>


        </div>

    )

}
