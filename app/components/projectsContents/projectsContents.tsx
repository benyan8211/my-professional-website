'use client'

import { Button } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import { Card } from "flowbite-react";
import salesEmailScribeLogo from "../../assets/sales_email_scribe_logo.png";

const ProjectsContents = () => {
    const handleNavigation = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto p-6 ml-85">
            <Card
                className="max-w-sm cursor-pointer border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-shadow duration-300 ease-out hover:shadow-[0_0_18px_rgba(255,255,255,0.95)]"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={salesEmailScribeLogo.src}
                onClick={() => handleNavigation("https://sales-email-scribe.onrender.com")}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Sales Email Scribe
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    An AI powered scribe that writes high quality, custom tailored sales emails.
                </p>
                <Button 
                    color="dark"
                    className="cursor-pointer bg-[#1f2937] hover:bg-[#374151] border-2 border-gray-700 rounded-xl px-2 py-0.5 text-gray-300 font-medium transition-colors"
                    onClick={() => handleNavigation("https://github.com/benyan8211/sales_email_scribe")}
                >
                    <FaGithub className="mr-2 h-5 w-5 align-middle" />
                    <span className="align-middle text-sm">Code</span>
                </Button>
            </Card>
        </div>
    );
}

export default ProjectsContents;