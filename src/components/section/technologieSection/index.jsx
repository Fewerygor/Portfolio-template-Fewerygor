import { technologies } from "../../../data/technologies";
import { TechnologiesCard } from "./technologiesCard";
import styles from "./style.module.css"


export const TechnologieSection = () => {
    return(
        <section className={styles.sectionContainer}>
            <div className={styles.listContainer}>
                <h2>Tecnologias</h2>
                <ul className={styles.list}>
                    {technologies.map((technology, index) => {
                        return(
                            <TechnologiesCard
                                key={index}
                                title={technology.name}
                                img={technology.img}
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};
