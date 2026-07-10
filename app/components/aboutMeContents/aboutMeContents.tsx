'use client'

import Image from 'next/image'
import Link from 'next/link';
import awsLogo from "../../assets/aws_logo.jpeg";
import nodejsLogo from "../../assets/nodejs_logo.png";
import githubLogo from "../../assets/github_logo.jpg";
import nextjsLogo from "../../assets/nextjs_logo.png";
import styles from "./aboutMeContents.module.css";

const AboutMeContents = () => {
    return (
        <>
            <div className="flex justify-center mt-15">
                <div className={`relative w-48 h-48 overflow-hidden rounded-full ${styles.imageContainer}`}>
                    <Image
                        src={awsLogo}
                        width={500}
                        height={500}
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
            <div className={styles.aboutMeText}>
                <div>I am a software developer with 7+ years of experience. I have worked in full-stack development positions across 3 companies, building RESTful API services using Spring Boot and NodeJS connected to MongoDB and DynamoDB databases and front end web interfaces using React and Next. I built this website using Next Typescript and hosted it on AWS using AWS Amplify.</div>
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
        </>
    );
}

export default AboutMeContents;