import { Banner } from "../components/section/banner";
import { AboutMe } from "../components/section/aboutMe";
import { DefaultTemplate } from "../components/defaultTemplate";
import { ProjectSection } from "../components/section/projectSection";
import { TechnologieSection } from "../components/section/technologieSection";

export const Pages = () => {
    return(
        <DefaultTemplate>
            <Banner/>
            <AboutMe/>
            <TechnologieSection/>
            <ProjectSection/>
        </DefaultTemplate> 
    );
};
