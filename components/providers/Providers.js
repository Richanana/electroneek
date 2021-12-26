import React from "react";
import styles from "../providers/Providers.module.scss"
import Link from "next/link";

export  function Providers({title, desc, logo, id}) {
    const key = 0;
    return (
        <>
            <div className={`${styles.partnerLogos}`}>
                <h2>{title}<span>{desc}</span></h2>
                
                <ul className={styles.logos}>
                    {logo.map(child => (
                        <li key={key++}><Link href={"/"}><a className={styles[child]}></a></Link></li>
                    ))}
                </ul>
            </div>
        </>
    )
}
