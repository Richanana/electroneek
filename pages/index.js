import styles from '../styles/Home.module.scss'
import { MainLayout } from '../components/MainLayout'
import { Servises } from '../components/servises/Servises'
import servstyles from "../components/servises/Servises.module.scss"
import { Providers } from '../components/providers/Providers'
import { useEffect, useState } from 'react'
import prov from "../components/providers/Providers.module.scss"

export default function Home({ servises, partners }) {
  const [isServ, setServ] = useState();
  const [isPartner, setPartner] = useState([]);
  useEffect(async () => {
    const res = await fetch("http://localhost:4200/servises/")
    const servises = await res.json();
    setServ(servises?.serv)
  
    setPartner(servises?.partners)
  }, []);
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
          {isServ?.map(
            item => (
              <div key={item.id}>
                
                <Servises
                  selector={item.selector}
                  title={item.title} 
                  desc={item.desc}
                  arrow={item.arrowLink}/>
              </div>))
          }
        </div>
      </div>
      <div className={`${styles.mainContent} container`}>
        <div className={`${styles.partnersBlock}`}>
        {isPartner?.map(
          item => (
            
            <div key={item.id} className={`section${item.id}`}>
              <Providers title={item.title} desc={item.desc} logo={Object.values(item.logos).map(log => (log))} id={item.id}/>
            </div>))
        }
        </div>

      </div>
    </MainLayout>
  )
}



