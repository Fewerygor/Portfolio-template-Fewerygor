import styles from "../style.module.css";

export const ProjectsCard = ({ img, name, description }) => {
    return (
        <li className={styles.liContainer}>
            <div className={styles.listUp}>
                <h3>{name}</h3>
                <img src={img} alt="git-logo" />
            </div>

            <div className={styles.listOver}>
                <p>{description}</p>
                <a className={styles.more} href="#">Saiba mais</a>
            </div>
        </li>
    );
};