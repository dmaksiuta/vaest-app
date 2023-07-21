import Link from "next/link";
import '../bygning/bygning.scss'

export default function Bygning() {
    return (
        <div className="bygning-section">                
            <div className="bygning-section__info">
                <h2 className="bygning-section__title">Bygningen</h2>
                <p className="slogan bygning-section__slogan">Klassisk badehotel stil</p>
                <div className="bygning-section__desc">
                    <p className="desc">Vertikale lysegrå en på to beklædning med hvide træ vinduer, antracit farvet fladt tag (tagpap) med svag hældning mod øst, måske med et lille knæk mod vest og med enkelte lysindfald. Taget skal have solpaneler og sikre at stedet kan være selvforsynende med strøm året rundt.</p>
                    <p className="desc">Kunne også være en mulighed med en standard tagryg hvis ikke højden bliver et problem. Det vil give et mere klassisk udtryk.</p>
                    <p className="desc">Stedet skal oplyses af en svag grundbelysning af indirekte led lys i varm hvid udenpå og indenfor, døgnet rundt og året rundt.</p>
                    <p className="desc">Nordvest for bygningen skal være en stor have med enkelte frugttræer en stor flagstang med Dannebrog og borde bænke til dem som ikke ønsker at besøge restauranten, men blot nyde en is og kaffe efter et besøg på stranden.</p>
                    <p className="desc">Bygningen kunne være et L, lidt som den gamle købmand er det i dag.</p>
                    <p className="desc">I den første del mod nord skal restauranten være, stort åbent rum uden søjler. Bygningen skal have fuld kælder som ligger en halv etage over/under jorden, måske ikke i hele grundplan, men gerne halvdelen, kan lægges hvor som helst så længe der er adgang fra øst, skal bruges til køl og prep. Vare nedkørsel mod øst. Skal have et enkelt toilet til personalet.</p>
                    <p className="desc">En trappe mod nord leder gæster en halv etage op til hovedindgangen, som er i en fransk dobbelt dør stil, vil se indbydende ud døgnet rundt og året rundt. Gæster træder ind i en rummelig entre hvor der hænger historiske billeder fra området m.v. Muligvis et par toiletter, primært til gæsterne i haven.</p>
                    <p className="desc">Mod øst er et stort åbent langt (anretter) køkken og bar ud i et med tydelige elementer af varme metal farver som bronze eller kobber og udgang bagved til en udvendig trappe til kælderen.</p>
                    <p className="desc">Mod vest er en kæmpe altan (hævet en halv etage over jorden) med store vinduespartier mod restauranten som kan åbnes og lukkes efter behov.</p>
                    <p className="desc">Mod syd er en afdeling som er forbundet af en opaque dobbeltdør til restauranten. Afdelingen er tiltænkt 4 værelser mod øst og en stor fællesstue mod vest med lofthængt pejs og stort glasparti mod vest. I denne del skal der også være 2 store lækre toiletter til sovende gæster samt til restaurantens gæster (herre / dame). Samt et stort familie badeværelse med 2 brusere.</p>
                    <p className="desc">Afdelingen kan bruges til overnattende gæster efter et privat arrangement, samt som “cognac stue” efter et besøg i restauranten eller et special arrangement.</p>
                    <p className="desc">Under altanen/terrassen mod nord vest skal være et lille cafe/ishus serveringsvindue som eventuelt er sænket lidt med nogle trin eller eventuelt kapper vi noget af terrassen. Det er for at servicere ikke restaurantgæster i sæsonen.</p> 
                </div> 
                <Link href="/menu" className="btn bygning-section__btn">Læs mere om Menuen</Link>
            </div>
            {/* <img src="img/main-bg-1.jpg" alt="restaurant building">                */}
        </div>
        
    )

}