'use client'

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