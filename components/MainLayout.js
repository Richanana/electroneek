import Head from 'next/head'
import main from '../styles/header.module.scss'
import Link from 'next/link'

export function MainLayout({ children, title = "Home" }) {
    return (
    <>
    <Head>
        <title>{title} | Electroneek</title>
    </Head>
        <nav>
            <header className={main.header}>
                <div >
                    <Link href={"/"}>
                        <a>
                            <div className={main.logotype}></div>
                        </a>
                    </Link>
                </div>
                <div className={main.mainMenu}>
                    <ul>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/about"}>about</Link>
                    </ul>
                </div>
            </header>
        </nav>
        <main>
            {children}
        </main>
    </>
    )
    
}