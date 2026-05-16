import linkedinLogo from "../../assets/linkedin_logo.jpg";
import githubLogoLarge from "../../assets/github_logo_large.jpg";
import gmailLogo from "../../assets/gmail_logo.png";
import CompendiumMainPage from '../components/compendiumContents/compendiumMainPage';
import MyWebsiteNavBar from "../components/navBar/navBar";

const Compendium = () => {
    return (
        <>
            <MyWebsiteNavBar activeTab={'compendium'} />
            <CompendiumMainPage />
        </>
    );
}

export default Compendium;