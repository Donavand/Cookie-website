import React from "react";

import { Center, TextConstants } from "../../common";
import styles from "./About.module.css";

/**
 * Returns the about page
 *
 * @returns The about page
 */
export const About = (): JSX.Element => (
    <Center>
        <div className={styles.layout}>
            <h1>{TextConstants.ABOUT.TITLE}</h1>
            <p className={`${styles.description}`}>
                {TextConstants.ABOUT.DESCRIPTION}
            </p>
        </div>
    </Center>
);
