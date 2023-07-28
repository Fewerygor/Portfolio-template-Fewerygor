import styles from "./style.module.css";

export const AboutMe = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.aboutMeContainer}>
                <div className={styles.h2}>
                    <h2>Sobre mim</h2>
                </div>

                <div className={styles.paragraph}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.</p>
                </div>
            </div>
        </section>
    );
};