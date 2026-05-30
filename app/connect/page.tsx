'use client'

import MyWebsiteNavBar from "../components/navBar/navBar";
import ConnectContents from '../components/connectContents/connectContents';

export default function AboutPage() {
    return (
        <>
            <MyWebsiteNavBar activeTab={'connect'} />
            <ConnectContents />
        </>
    );
}