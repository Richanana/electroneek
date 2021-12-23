import styles from '../styles/Home.module.scss'
import { MainLayout } from '../components/MainLayout'
import { Servises } from '../components/servises/Servises'
import servstyles from "../components/servises/Servises.module.scss"

export default function Home({ servises }) {
  return (
    <MainLayout>
      <div className={`${styles.mainTopBar} container`}>
        <div className={styles.topBarInfo}>
          <h4>Deploy your own Robotic Process Automation Platform</h4>
          <h1>
            <b>The leading RPA <br /> Vendor</b> for managed <br /> service providers
          </h1>
          <p>
            ElectroNeek is more than a software vendor - it’s a business <br />
            partner that supports the growth of MSPs with zero-bot <br />
            licensing, hot leads, sales and marketing.
          </p>
        </div>
        <div className={styles.partnership}>
          <a href="#" className={styles.explore}>EXPLORE PARTNERSHIP</a>
          <div className={styles.partersLogos}>
            <ul>
              <li className={styles.gartner}><a href="#"></a></li>
              <li className={styles.everest}><a href="#"></a></li>
            </ul>
          </div>
        </div>
        <div className={servstyles.mainServises}>
          {servises.map(
            item => (<Servises id={item.id}
              selector={item.selector}
              title={item.title} />))
          }
        </div>
      </div>
    </MainLayout>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:4200/servises")
  const servises = await res.json();
  return {
    servises
  }
} 
