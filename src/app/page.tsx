import Link from "next/link";
import styles from './page.module.scss';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className="main-section">
          {/* <img src="img/main-bg-1.jpg" alt="restaurant building"> */}
          <div className="main-section__info">
              <h3 className="main-section__title">Velkommen til projekt Væst ved Trend strand</h3>
              <p className="desc main-section__desc"><span>Væst</span> navnet er inspireret af Vesthimmerland, solnedgangen mod vest samt det nye danske køkken.</p>
              <p className="text-14 main-section__desc">Vi ønsker at skabe et mødested med en bedre dansk restaurantoplevelse, for Trend sommerhusområde og dets beboere samt dagsgæster, til synet af endeløse skiftende solnedgange over Limfjorden ved den smukke Trend strand med øerne Fyr og Livø i baggrunden.</p>
              <p className="text-14 main-section__desc">Projektet er beliggende på Gl. Amtsvej 39, Trend, 9670 Løgstør. Der hvor den gamle købmand blev bygget tilbage i 1949.</p>
              <Link href="/baggrund" className="btn main-section__btn">Læs mere om projektet</Link>
          </div>                                
      </div>
    </main>
  )
}
