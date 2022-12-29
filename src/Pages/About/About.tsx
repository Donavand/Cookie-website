import "./About.css";

import React from "react";

import { TextConstants } from "../../common";

/**
 * Returns the about page
 *
 * @returns The about page
 */
export const About = (): JSX.Element => (
    <div className=".Children">
        <h1>{TextConstants.ABOUT.TITLE}</h1>
        <br />
        <p>{TextConstants.ABOUT.DESCRIPTION}</p>
    </div>
);
