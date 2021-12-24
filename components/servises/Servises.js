import styles from "./Servises.module.scss"
import Link from "next/link"


export function Servises({ selector, title, desc, arrow }) {
    return (
        <>
            <div className={`${styles.servises} ${styles[selector]}`}>
                <div className={styles.servBack}></div>
                <p><b>{title}</b>{desc}</p>
                <Link href={"/"}><a className={`${styles.arrowLink} ${styles[arrow]}`}></a></Link>
            </div>
            
        </>
    )
}