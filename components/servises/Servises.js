import styles from "./Servises.module.scss"






export function Servises({ selector, title, decs, id }) {
    const withImages = require('next-images')
    module.exports = withImages()
    return (
        <>
            <div key={id} className={`${styles.servises} ${styles[selector]}`}>
                <div className={styles.servBack}></div>
                <h3>{title}</h3>
            </div>
        </>
    )
}