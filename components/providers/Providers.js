import React from "react";
import styles from "../providers/Providers.module.scss"

export  function Providers({title, desc, logo}) {
    const imgg = require("../../public/assets/images/images36.jpg")
    return (
        <>
            <div className={`${styles.partnerLogos} ${styles.providers}`}>
                <h2>{title}<span>{desc}</span></h2>
                <img src={imgg} width={"200px"} height={"200px"}/>
                <ul>
                    {logo.map(item => (
                        <li><a>{item}</a></li>
                    ))}
                </ul>
            </div>
        </>
    )
}

// Providers.getInitialProps = async () => {
//     const res = await fetch("http://localhost:4200/partners/");
//     const partners = await res.json();
//     return { partners }
// }