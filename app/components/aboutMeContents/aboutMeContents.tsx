import Image from 'next/image'
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
                    />
                </div>
                <div className={`relative w-48 h-48 overflow-hidden rounded-full ${styles.imageContainer}`}>
                    <Image
                        src={nodejsLogo}
                        width={250}
                        height={250}
                        alt="Picture of aws logo"
                        className="object-cover"
                    />
                </div>
                <div className={`relative w-48 h-48 overflow-hidden rounded-full ${styles.imageContainer}`}>
                    <Image
                        src={githubLogo}
                        width={250}
                        height={250}
                        alt="Picture of aws logo"
                        className="object-cover"
                    />
                </div>
                <div className="relative w-48 h-48 overflow-hidden rounded-full">
                    <Image
                        src={nextjsLogo}
                        width={250}
                        height={250}
                        alt="Picture of aws logo"
                        className="object-cover"
                    />
                </div>
            </div>
            <div className={styles.aboutMeText}>I am a software developer with 7+ years of experience. I have worked in full-stack development positions across 3 companies, building RESTful API services using Spring Boot and NodeJS connected to MongoDB and DynamoDB databases and front end web interfaces using React and Next. I built this website using Next Typescript and it is hosted on AWS using AWS Amplify.</div>
            <div className={styles.aboutMeText}>In my free time, I enjoy learning about new concepts in technical areas like Artificial Intelligence and leveraging new insights to build scalable solutions. I have documented a few key ideas from my learning in the <em>Compendium</em> tab. I have built applications using OpenAI API SDK, LangGraph, and Pydantic AI. Try out live demonstrations of some of my applications in the <em>Projects</em> tab.</div>
        </>
    );
}

export default AboutMeContents;