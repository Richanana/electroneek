import styles from '../styles/Home.module.scss'
import { MainLayout } from '../components/MainLayout'
import { Button } from '../components/button/Button'
import { Servises } from '../components/servises/Servises'
import servstyles from "../components/servises/Servises.module.scss"
import { Providers } from '../components/providers/Providers'
import { useEffect, useState } from 'react'
import prov from "../components/providers/Providers.module.scss"
import { CompanyInfo } from '../components/CompanyInfo/CompanyInfo'
import { Footer } from '../components/footer/Footer'
import Link from 'next/link'
import footer from "../styles/Footer.module.scss"

export default function Home() {
  const [isServ, setServ] = useState();
  const [isPartner, setPartner] = useState();
  const [isComp, setCompany] = useState();
  const [isFooter, setFooter] = useState();
  useEffect(async () => {
    const res = await fetch("http://localhost:4200/servises/");
    const servises = await res.json();
    setServ(servises?.serv);
    setPartner(servises?.partners);
    setCompany(servises?.company);
    console.log(servises?.footerMenu.menu1)
    setFooter(servises?.footerMenu);
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
          <Button text={"EXPLORE PARTNERSHIP"}/>
          <div className={styles.partersLogos}>
            <ul>
              <li className={styles.gartner}><a href="#"></a></li>
              <li className={styles.everest}><a href="#"></a></li>
            </ul>
          </div>
        </div>
        <div className={servstyles.mainServises}>
          {isServ?.map(item => (
            <div key={item.id}>
              <Servises
                selector={item.selector}
                title={item.title}
                desc={item.desc}
                arrow={item.arrowLink} />
            </div>))
          }
        </div>
      </div>
      <div className={`${styles.mainContent} container`}>
        <div className={`${prov.partnersBlock}`}>
          {isPartner?.map(item => (
            <div key={item.id} className={`${prov.section}`}>
              <Providers
                title={item.title}
                desc={item.desc}
                logo={Object.values(item.logos).map(log => (log))}
                id={item.id} />
            </div>))
          }
        </div>
        <div className={styles.company}>
          {isComp?.map(item => (
            <div key={item.id}>
              <CompanyInfo
                title={item.title}
                subTitle={item.subTitle}
                btnText={item.btnText}
                span={item.span} />
            </div>
          ))}
        </div>
      </div>
      <footer className={footer.siteFooter}>
        <div className={`container`}>
        <div className={footer.footerMenu}>
          {isFooter?.map(item => (
          <Footer menu={Object.values(item.menuItem).map(link => (link))}/>
        ))}
        </div>
        <div className={footer.copyright}>
          <div className={footer.footerLogo}></div>
          <div className={footer.socialIcons}>
            <ul>
              <li><Link href={"/"}><a className={footer.insta}></a></Link></li>
              <li><Link href={"/"}><a className={footer.in}></a></Link></li>
              <li><Link href={"/"}><a className={footer.yout}></a></Link></li>
              <li><Link href={"/"}><a className={footer.fb}></a></Link></li>
            </ul>
          </div>
        </div>
        </div>
        
      </footer>
        
      
    </MainLayout>
  )
}



