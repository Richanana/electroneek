import styles from "../button/Button.module.scss"
export function Button({text}) {
    return (
        <a href="#" className={styles.explore}>{text}</a>
    )
}