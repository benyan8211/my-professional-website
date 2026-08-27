'use client'

import Image from 'next/image'
import websiteUnderConstruction from "../../assets/website_under_construction.png";
import styles from "./projectsContents.module.css";
import { Card } from "flowbite-react";
import salesEmailScribeLogo from "../../assets/sales_email_scribe_logo.png";

const ProjectsContents = () => {
    const handleCardNavigation = (url: string) => {
        // ✅ Opens the URL cleanly in a new tab
        window.open(url, "_blank", "noopener,noreferrer");
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto p-6 ml-85">
            <Card
                className="max-w-sm cursor-pointer border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-shadow duration-300 ease-out hover:shadow-[0_0_18px_rgba(255,255,255,0.95)]"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={salesEmailScribeLogo.src}
                onClick={() => handleCardNavigation("https://sales-email-scribe.onrender.com")}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Sales Email Scribe
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    An AI powered scribe that writes high quality, custom tailored sales emails.
                </p>
            </Card>
        </div>
    );
}

export default ProjectsContents;