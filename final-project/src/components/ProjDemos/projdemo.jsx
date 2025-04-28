import React from "react";
import styles from "./projdemo.module.css";
import { getImageUrl } from "../../utils";

export const ProjDemo = ({ project : {title, fulldescription, screenshots, source} }) => {
    return (
    <div className={styles.container}>
    <h3 className={styles.title}>{title}</h3>
            <div className={styles.screenshotContainer}>
                {screenshots && screenshots.length > 0 ? (
                    screenshots.map((screenshot, index) => (
                        <img
                            key={index}
                            src={getImageUrl(screenshot)} 
                            alt={`Screenshot ${index + 1} of ${title}`}
                            className={styles.screenshot}
                        />
                    ))
                ) : (
                    <p>No screenshots available</p> // Display a message if no screenshots are available
                )}
            </div>
    <div className={styles.descriptionContainer}>
    <p className={styles.description}>{fulldescription}</p>
    </div>
    <div className={styles.links}>
        <a href={source} target="_blank" className={styles.link}>Source</a>
    </div>
    </div>
    );
}