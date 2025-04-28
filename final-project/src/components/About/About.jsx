import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <p className={styles.description}>Hi! I’m a first-generation Hispanic student and aspiring full-stack developer with a passion for building applications that make a real difference in people’s lives. I’m currently pursuing my Bachelor’s degree in Computer Science at Cal State Fullerton, after returning to school with a renewed sense of purpose during the pandemic.
                    My path into tech hasn’t been traditional. I originally stepped away from college in 2015, unsure of what I wanted to pursue. But watching family members thrive in STEM careers reignited my interest and helped me realize that software development could be a powerful tool to support and uplift my community.
                    Before tech, I built a strong foundation in real-world problem solving — with 9+ years of customer service experience and 3+ years in public service. I currently work for the City of Orange as a Library Clerk, where I’ve seen first-hand how access to information and technology can change lives.
                    Now, I’m translating that experience into code. I'm focused on learning full-stack development, designing and deploying modern web applications, and ultimately using my skills to build tools that serve the public good. I’m especially interested in projects that support education, accessibility, and local communities.</p>
            </div>
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