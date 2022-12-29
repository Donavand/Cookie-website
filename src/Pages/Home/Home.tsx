import "./Home.css";

import React from "react";

import { TextConstants } from "../../common";

/**
 * The home page, which contains the welcome message and all information about the website we want to be seen first
 *
 * @returns The home page
 */
export const Home = (): JSX.Element => (
    <div className="">
        <h1>{TextConstants.HOME.TITLE}</h1>
    </div>
);
