import Head from 'next/head'
import styles from '../styles/header.module.scss'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export function MainLayout({ children, title = "Home" }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenu, setMenu] = useState(false);
    const [headerSc, setHeader] = useState("not");
    
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const openedMenu = () => {
        setMenu(!isMenu)
    }

    const listenScrollEvent = (event) => {
        if(window.scrollY > 2400) {
            return setHeader("alredy")
        } else if (window.scrollY < 100){
            return setHeader("no")
        }else if(window.scrollY > 100) {
            return setHeader("scrolled")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

    }, []);


    return (
        <>
            <Head>
                <title>{title} | Electroneek</title>
            </Head>
            <nav>
                <header className={`${styles.header} container ${headerSc}`}>
                    <div>
                        <Link href={"/"}>
                            <a>
                                <div className={styles.logotype}></div>
                            </a>
                        </Link>
                    </div>
                    <span className={`${styles.menuIcon} ${isMenu ? styles.none : null}`} onClick={openedMenu}></span>
                    <div className={`${styles.mainMenu} ${isMenu ? styles.openedMenu : null}`} >
                        <span className={styles.closeIcon} onClick={openedMenu}></span>
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