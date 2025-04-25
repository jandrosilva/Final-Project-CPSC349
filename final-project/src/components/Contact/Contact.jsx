import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return( 
        <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Reach out to using my links.</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img 
                    src={getImageUrl("contact/emailIcon.png")} 
                    alt="Email icon"
                />
                <a href="mailto:alejandrosilvacampos@outlook.com">alejandrosilvacampos@outlook.com</a> 
            </li>
            <li className={styles.link}>
                <img 
                    src={getImageUrl("contact/githubIcon.png")} 
                    alt="Github icon"
                />
                <a href="https://github.com/jandrosilva">github.com/jandrosilva</a> 
            </li>
            <li className={styles.link}>
                <img 
                    src={getImageUrl("contact/linkedinIcon.png")} 
                    alt="LinkedIn icon"
                />
                <a href="https://www.linkedin.com/in/alejandrosilvacampos" target="_blank">linkedin.com/in/alejandrosilvacampos</a> 
            </li>
        </ul>
    </footer>
    );
}