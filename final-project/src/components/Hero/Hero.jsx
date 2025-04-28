import React from "react";
import styles from "./Hero.module.css";
import resumePdf from "../../assets/hero/AlejandroSResume.pdf";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Alejandro.</h1>
            <p className={styles.description}>
                I'm a Computer Science student at the University of California-Fullerton, pursuing a Bachelor's in Software Development.
                I have experience in languages such as C++, Java, Javascript, HTML and CSS. Reach out if you'd
                like to learn more!
            </p>
            <a 
                href={resumePdf} target="_blank"
                className={styles.contactBtn}>My Resume</a>
        </div>
        <img 
            src={getImageUrl("hero/heroImage.png")} alt="Hero image of me." 
            className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
};