import styles from "../companyInfo/CompanyInfo.module.scss"
import { Button } from "../button/Button"

export function CompanyInfo({title, subTitle, span, btnText, img}) {
    return (
        <>
            <div className={styles.companyInfo}>
                <div className={styles.leftBlock}>
                    <h4>{subTitle}</h4>
                    <h2>{title}<br/><span>{span}</span></h2>
                    <div className={`${styles.companyImg} ${styles.mobImg}`}></div>
                    <Button text={btnText}/>
                    <div className={styles.arrows}>
                        <span className={styles.prev}></span>
                        <span className={styles.next}></span>
                    </div>
                </div>
                <div className={`${styles.companyImg} ${styles.descImg}`}></div>
            </div>
        </>
    )
}