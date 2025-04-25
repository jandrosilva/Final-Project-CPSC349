import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutImage.png")} 
                    alt="Memeoji in suit"
                    className={styles.aboutImage} 
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cursorIcon.png")} 
                            alt="Cursor Icon" 
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Development</h3>
                            <p>
                            As a passionate full-time computer science student, I've honed my front-end development skills by building dynamic, responsive websites using core technologies like HTML, CSS, JavaScript, as well as modern tools like React.js and Vite.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/serverIcon.png")} 
                            alt="Server Icon" 
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Development</h3>
                            <p>
                            While I’ve mainly focused on front-end development, I’m also diving into back-end development. I’ve been learning through courses on Operating Systems and languages like C++ and Java, and I'm building a solid understanding of how the server-side works. My goal is to become a full-stack developer, and I’m excited to keep learning how to bring both front-end and back-end together to build smooth, interactive apps.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/uiIcon.png")} 
                            alt="UI Icon" 
                        />
                        <div className={styles.aboutItemText}>
                            <h3>UI Design</h3>
                            <p>
                            I’ve started exploring UI design through projects like an ATM simulator, my portfolio website, and a simple shell program. While they’re pretty basic, they’ve given me a chance to experiment with creating clean and easy-to-use interfaces, and I’m excited to keep improving my design skills as I work on more projects.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}