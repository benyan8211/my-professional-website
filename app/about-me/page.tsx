import Image from 'next/image'
import MyWebsiteNavBar from "../components/navBar/navBar";
import AboutMeContents from '../components/aboutMeContents/aboutMeContents';

export default function AboutPage() {
    return (
        <>
            <MyWebsiteNavBar activeTab={'about-me'} />
            <AboutMeContents />
        </>
    );
}