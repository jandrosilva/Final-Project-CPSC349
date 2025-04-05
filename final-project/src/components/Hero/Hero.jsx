import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm Alejandro.</h1>
            <p className={styles.description}>
                I am a Computer Science student at the University of California-Fullerton.
                I am currently pursing a Bachelor's in Software Development with experience
                in languages such as C++, Java, Javascript, HTML and CSS. Reach out if you'd
                like to learn more!
            </p>
            <a 
                href="mailto:alejandrosilvacampos@outlook.com"
                className={styles.contactBtn}>Contact Me</a>
        </div>
        <img 
            src={getImageUrl("hero/heroImage.png")} alt="Hero image of me." 
            className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
};