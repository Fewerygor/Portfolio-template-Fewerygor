import bannerImg from "../../../assets/banner-img.png";
import { username } from "../../../data/user";
import styles from "./style.module.css";

export const Banner = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.bannerContainer}>
                <div className={styles.text}>
                    <span>{username}</span>
                    <h1>Bem vindo ao meu portifólio</h1>
                    <p>Uma frase interessante sobre mim</p>
                    <button className={styles.button}>Saiba mais</button>
                </div>

                <img src={bannerImg} alt="banner-logo" />
            </div>
        </section>
    )
}