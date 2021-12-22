import Head from 'next/head'
import styles from '../styles/header.module.scss'
import Link from 'next/link'
import { useState } from 'react'

export function MainLayout({children, title = "Home" }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
    return (
    <>
    <Head>
        <title>{title} | Electroneek</title>
    </Head>
        <nav>
            <header className={`${styles.header} container`}>
                <div>
                    <Link href={"/"}>
                        <a>
                            <div className={styles.logotype}></div>
                        </a>
                    </Link>
                </div>
                <div className={styles.mainMenu}>
                    <ul>
                        <li><a href="#">RPA</a></li>
                        <li><a href="#">MSPs</a></li>
                        <li><a href="#">ENTERPRISE</a></li>
                        <li><a href="#">PRODUCTS</a></li>
                        <li><a href="#">PARTNERS</a></li>
                        <li><a href="#">FOR DEVELOPERSPA</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">COMPANY</a></li>
                    </ul>
                </div>
                <div className={styles.headerInfo}>
                    <ul className={styles.langWidget}>
                        <li onClick={handleToggle} className={styles.currentLang}>
                            <a href="#">EN</a>
                        </li>
                        <li className={`${isOpen ? styles.opened : null}`}>
                            <a href="#">RU</a>
                        </li>
                    </ul>
                    <button className={styles.defBtn}>TALK TO US</button>
                    <div className={styles.profilePhone}>
                        <a href="#" className={styles.profileIcon}></a>
                        <a href="tel:+79992525255" className={styles.phoneIcon}></a>
                    </div>
                </div>
                
            </header>
        </nav>
        <main>
            {children}
        </main>
    </>
    )
    
}