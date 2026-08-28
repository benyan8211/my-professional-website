'use client'

import Image from 'next/image'
import Link from 'next/link';
import awsLogo from "../../assets/aws_logo.jpeg";
import adobeAcrobatLogo from "../../assets/adobe_acrobat_logo.png";
import nodejsLogo from "../../assets/nodejs_logo.png";
import githubLogo from "../../assets/github_logo.jpg";
import nextjsLogo from "../../assets/nextjs_logo.png";
import openaiLogo from "../../assets/openai_agents_sdk_logo.png";
import postgresqlLogo from "../../assets/postgresql_logo.png";
import pythonDjangoLogo from "../../assets/python_django_logo.png";
import styles from "./aboutMeContents.module.css";
import { Button } from "flowbite-react";
import { saveAs } from 'file-saver'

const AboutMeContents = () => {
    const handleDownload = async () => {
        try {
          const response = await fetch('/documents/Benjamin_Yan_Resume.pdf');
          const blob = await response.blob();
          saveAs(blob, 'Benjamin_Yan_Resume.pdf');
        } catch (error) {
          console.error('Download failed:', error);
        }
    };

    return (
        <>
            <div className="flex justify-center mt-15">
                <div className={`relative w-48 h-48 overflow-hidden rounded-full ${styles.imageContainer}`}>
                    <Image
                        src={awsLogo}
                        width={250}
                        height={250}
                        alt="Picture of aws logo"
                        className="object-cover"
                        priority
                    />
                </div>
                <div className={`relative w-48 h-48 overflow-hidden rounded-full ${styles.imageContainer}`}>
                    <Image
                        src={nodejsLogo}
                        width={250}
                        height={250}
                        alt="Picture of nodejs logo"
                        className="object-cover"
                        priority
                    />
                </div>
                <div className={`relative w-48 h-48 overflow-hidden rounded-full ${styles.imageContainer}`}>
                    <Image
                        src={githubLogo}
                        width={250}
                        height={250}
                        alt="Picture of github logo"
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative w-48 h-48 overflow-hidden rounded-full">
                    <Image
                        src={nextjsLogo}
                        width={250}
                        height={250}
                        alt="Picture of nextjs logo"
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
            <div className="flex justify-center mt-15">
                <div className={`relative w-48 h-48 overflow-hidden rounded-full ${styles.imageContainer}`}>
                    <Image
                        src={pythonDjangoLogo}
                        width={250}
                        height={250}
                        alt="Picture of aws logo"
                        className="object-cover"
                        priority
                    />
                </div>
                <div className={`relative w-48 h-48 overflow-hidden rounded-full ${styles.imageContainer}`}>
                    <Image
                        src={postgresqlLogo}
                        width={250}
                        height={250}
                        alt="Picture of aws logo"
                        className="object-cover"
                        priority
                    />
                </div>
                <div className={`relative w-48 h-48 overflow-hidden rounded-full ${styles.imageContainer}`}>
                    <Image
                        src={openaiLogo}
                        width={250}
                        height={250}
                        alt="Picture of aws logo"
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
            <div className={styles.aboutMeText}>
                <div>I am a software developer with 7+ years of experience. I have worked in full-stack development positions across 3 companies, building enterprise grade RESTful API services and polished front end web interfaces. I built this website using Next Typescript and hosted it on AWS Amplify. I also build Agentic AI projects in my free time.</div>
                <br />
                <div>Check out the <Link className="text-white-500 hover:text-gray-500" href="/compendium"><strong className={styles.tabText}>Compendium</strong></Link> tab for educational articles I've put together.</div>
                <div>Check out the <Link className="text-white-500 hover:text-gray-500" href="/projects"><strong className={styles.tabText}>Projects</strong></Link> tab to interact with live demos of my projects.</div>
                <div>Check out the <Link className="text-white-500 hover:text-gray-500" href="/connect"><strong className={styles.tabText}>Connect</strong></Link> tab to:</div>
                <ul className="list-disc pl-10">
                    <li>view the source code of my projects on GitHub</li>
                    <li>add me on LinkedIn</li>
                    <li>send me an email</li>
                </ul>
            </div>
            <div>
                <div className={styles.resumeText}>For a detailed look at my professional history and technical expertise:</div>
                <Button 
                    color="dark"
                    className="!ring-0 whitespace-nowrap justify-self-center mb-10 cursor-pointer w-50 h-18 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 ease-out hover:border-white dark:hover:border-white hover:shadow-[0_0_12px_rgba(255,255,255,1),0_0_30px_rgba(255,255,255,0.6)]"
                    onClick={handleDownload}
                >
                    <Image
                        src={adobeAcrobatLogo}
                        width={30}
                        height={30}
                        alt="adobe acrobat logo"
                        className="object-cover"
                        priority
                    />
                    <span className="align-middle text-sm ml-3">Download Resume</span>
                </Button>
            </div>
        </>
    );
}

export default AboutMeContents;