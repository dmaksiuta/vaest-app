import Link from "next/link";

export default function Vision() {
    return (
        <div className="vision-section">
            <div className="vision-section__img">
                {/* <img src="img/vision.jpg" alt="sea sunset"> */}
            </div>                
            <div className="vision-section__info">
                <h3 className="vision-section__title">Vision</h3>
                <p className="slogan vision-section__slogan">Jordnær ambition</p>
                <div className="vision-section__desc">
                    <p className="desc">At skabe et samlingssted for områdets beboere samt dagsgæster, både i og udenfor sommersæsonen. I sæsonen vil stedet fungere som en finere dansk restaurant med en simpel og lækker menu lavet fra top kvalitets råvarer fra oplandet. Udenfor sæsonen vil stedet fungere uden personale og medlemmer vil have adgang med en kode og kan betjene sig selv. Desuden vil det være muligt for medlemmer at booke stedet til arrangementer.</p>
                    <p className="desc">Et sted hvor man mødes til en kop kaffe, en bid kage, en god bid mad, den store madoplevelse, en god lokal is, en god lokal øl eller et godt glas vin.</p>
                    <p className="desc">Et sted hvor man taler med områdets beboere om løst og fast til synet af altid omskiftelige solnedgange.</p>
                    <p className="desc">Et sted der er tydeligt ambitiøst og gerne vil blive til et navn, hvis ikke i landen så i regionen, men også gerne være afslappet og jordnær på en og samme tid.</p>
                </div>
                <Link href="/beliggenhed" className="btn vision-section__btn">Se beliggenhed</Link>
            </div>                
        </div>
        
    )

}