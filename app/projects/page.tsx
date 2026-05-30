'use client'

import MyWebsiteNavBar from "../components/navBar/navBar";
import ProjectsContents from '../components/projectsContents/projectsContents';

export default function AboutPage() {
    return (
        <>
            <MyWebsiteNavBar activeTab={'projects'} />
            <ProjectsContents />
        </>
    );
}