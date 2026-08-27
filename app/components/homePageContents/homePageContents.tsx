'use client'

import Image from 'next/image'
import myProfessionalPicture from "../../assets/professional_picture.jpg";
import styles from "./homePageContents.module.css";

const HomePageContents = () => {
    return (
        <>
            <div className="flex justify-center mt-28 ml-3">
                <div className="relative w-82 h-82 overflow-hidden rounded-full">
                    <Image
                        src={myProfessionalPicture}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className="object-cover"
                    />
                </div>
            </div>
            <div className={styles.homePageSubHeading}>Software developer • AI hobbyist • Continuous learner</div>
        </>
    );
}

export default HomePageContents;