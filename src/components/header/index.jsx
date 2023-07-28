import portifolio from "../../assets/portfolio.png";
import styles from "./style.module.css";

export const HeaderNav = () => {
    return (
        <header className={styles.headerContainer}>
            <nav className={styles.flexBox}>
                <div className={styles.image}>
                    <img src={portifolio} alt="Portifolio-logo" />
                </div>

                <div className={styles.paragraph}>
                    <a href="#">Sobre</a>
                    <a href="#">Slack</a>
                    <a href="#">Projetos</a>
                </div>

                <button className={styles.button}>Contato</button>
            </nav>
        </header>
    );
};