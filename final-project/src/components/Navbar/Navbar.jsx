import React, {useState} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuopen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
            Alejandro Silva
        </a>
        
        <div className={styles.navContainer}>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={menuOpen 
                        ? getImageUrl("/nav/closeIcon.png")
                        : getImageUrl("/nav/menuIcon.png")
                    } 
                    alt="menu-button"
                    onClick={() => setMenuopen(!menuOpen)}
                />

                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuopen(false)}
                >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            
            <div className={styles.socialIcons}>
                <a href="https://linkedin.com/in/alejandrosilvacampos/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/jandrosilva" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="mailto:alejandrosilvacampos@outlook.com">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </div>
    </nav>
  ); 
};