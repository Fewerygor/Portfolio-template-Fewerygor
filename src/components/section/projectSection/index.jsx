import { projects } from "../../../data/projects";
import { ProjectsCard } from "./projectsCard";
import styles  from "./style.module.css";


export const ProjectSection = () => {
    return(
        <section className={styles.sectionContainer}>
            <div className={styles.listContainer}>
                <h2>Projetos</h2>
                <ul className={styles.list}>
                    {projects.map((project, index) => {
                        return(
                            <ProjectsCard
                                key={index}
                                img={project.img}
                                name={project.name}
                                description={project.description}
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};