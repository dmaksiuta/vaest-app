import '../folkene/folkene.scss'

export default function Folkene() {
    return (
        <div className="folkene-section">
            <h3 className="folkene-section__title">Folkene bag</h3>
            <p className="slogan folkene-section__slogan">Et lokalt hold af kompetente kræfter bag Væst projektet</p>
            <div className="folkene-section__row row">
                {/* <img src="img/folkene/Folkene-1.webp" alt="Kasper Kau photo"> */}
                <div className="row__info">
                    <h4 className="row__title">Kasper Kau</h4>
                    <div className="slogan row__slogan">Stifter</div>
                    <div className="desc row__desc">Civilingeniør fra Aalborg Universitet og pilot fra European Pilot Academy på Malta.</div>
                    <div className="desc row__desc">Har sommerhus på Amaliesvej 15 i Trend.</div>						
                </div>
            </div>

            <div className="folkene-section__row row">
                {/* <img src="img/folkene/Folkene-2.webp" alt="Trine Kau photo"> */}
                <div className="row__info">
                    <h4 className="row__title">Trine Kau</h4>
                    <div className="slogan row__slogan">Stifter</div>
                    <div className="desc row__desc">Sygeplejerske fra Viborg med videreuddannelse i SoMe og markedsførring.</div>
                    <div className="desc row__desc">Har sommerhus på Amaliesvej 15 i Trend.</div>						
                </div>
            </div>

            <div className="folkene-section__row row">
                {/* <img src="img/folkene/Folkene-3.png" alt="Mogens Kjær photo"> */}
                <div className="row__info">
                    <h4 className="row__title">Mogens Kjær</h4>
                    <div className="slogan row__slogan">Advokat</div>
                    <div className="desc row__desc">Jurist fra Aarhus Universitet med møderet for landsretten og indehaver af Kjær Advokater i Løgstør.</div>
                    <div className="desc row__desc">Går på jagt i Trend.</div>						
                </div>
            </div>

            <div className="folkene-section__row row">
                {/* <img src="img/folkene/henrik_1327.jpeg" alt="Henrik Pedersen photo"> */}
                <div className="row__info">
                    <h4 className="row__title">Henrik Pedersen</h4>
                    <div className="slogan row__slogan">Byggerådgiver og arkitekt</div>
                    <div className="desc row__desc">Bygningskonstruktør og indehaver af tegnestue og byggerådgivningsfirmaet No.57 i Nibe.</div>
                    <div className="desc row__desc">Besøger Trend i sin fritid.</div>						
                </div>
            </div>

            <div className="folkene-section__row row">
                {/* <img src="img/folkene/Folkene-5.webp" alt="Ole Hosbond Poulsen photo"> */}
                <div className="row__info">
                    <h4 className="row__title">Ole Hosbond Poulsen</h4>
                    <div className="slogan row__slogan">Revisor</div>
                    <div className="desc row__desc">Statsautoriseret revisor hos Beierholm i Aars.</div>
                    <div className="desc row__desc">Har sommerhus i Trend.</div>						
                </div>
            </div>

            <div className="folkene-section__row row">
                {/* <img src="img/folkene/Folkene-6.png" alt="Asger Larsen photo"> */}
                <div className="row__info">
                    <h4 className="row__title">Asger Larsen</h4>
                    <div className="slogan row__slogan">Ejendomsmægler</div>
                    <div className="desc row__desc">Uddannet ejendomsmægler og medindehaver af mælgerfirmaet Asger Larsen - Allan Kristensen i Løgstør.</div>
                    <div className="desc row__desc">Den mest sælgende mægler i Trend.</div>						
                </div>
            </div>

        </div>
    )

}