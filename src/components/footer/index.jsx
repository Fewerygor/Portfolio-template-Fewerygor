import whatsappIcon from "../../assets/whatsapp-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import githubIcon from "../../assets/github-icon.png";
import { user } from "../../data/user.js";
import styles from "./style.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.flexBox}>

                <div className={styles.imgContainer}>
                    <h2>Contato</h2>
                    <span>
                        <a href="#">
                            <img src={whatsappIcon} alt="Whatsapp-logo" />
                            <img src={linkedinIcon} alt="Linkedin-logo" />
                            <img src={githubIcon} alt="Github-logo" />
                        </a>
                    </span>
                </div>

                <div className={styles.paragraph}>
                    <p>Todos os direitos reservados - {user}</p>
                </div>
            </div>
        </footer>
    );
};