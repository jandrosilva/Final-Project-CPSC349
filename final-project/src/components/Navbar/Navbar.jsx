// allows for the state of the navbar to change and update on events
import React, {useState} from "react";

// styling being imported from the css file
import styles from "./Navbar.module.css";

// dynamically setting the image file when the function is called
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuopen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
        Alejandro Silva
        </a>
        <div className={styles.menu}>
            
            
            <img 
            className={styles.menuBtn} 
            src={menuOpen 
                ? getImageUrl("/nav/closeIcon.png")
                : getImageUrl("/nav/menuIcon.png")
            } 
            alt= "menu-button"

            // onClick function will allow for the menu img to change
            // when clicked on
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
    </nav>
  ); 
};