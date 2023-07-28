import styles from "../style.module.css";

export const TechnologiesCard = ({ img, title }) => {
    return (
        <li className={styles.liContainer}>
            <div className={styles.imgContainer}>
                <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
        </li>
    );
};