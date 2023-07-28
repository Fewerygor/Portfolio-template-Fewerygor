import { HeaderNav } from "../header";
import { Footer } from "../footer";

export const DefaultTemplate = ({children}) => {
    return(
        <>
            <HeaderNav/>
            <main>{children}</main>
            <Footer/>
        </>
    );
};