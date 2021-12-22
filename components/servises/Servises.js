import styles from "../../styles/Servises.module.scss"

export function Servises({ backgrounds, title, decs }) {
    return (
        <>
            <div className={styles.servises}>
                <div className="servBack"></div>
                <p>lorem ipsum dolor sit ammet</p>
                </div>
            <style jsx>{`
                .servBack {
                    background: url("${backgrounds}");
                    background-size: contain;
                    background-repeat: no-repeat;
                    width: 100%;
                    height: 60px;
                }
            `}</style>
        </>
    )
}