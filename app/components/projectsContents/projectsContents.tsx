'use client'

import Image from 'next/image'
import websiteUnderConstruction from "../../assets/website_under_construction.png";
import styles from "./projectsContents.module.css";

const ProjectsContents = () => {
    return (
        <>
            <div className="flex justify-center mt-15">
                <Image
                    src={websiteUnderConstruction}
                    width={500}
                    height={500}
                    alt="Picture of aws logo"
                    className="object-cover"
                />
            </div>
            <div className={styles.projectsText}>This page is under construction. Please come back later.</div>
        </>
    );
}

export default ProjectsContents;