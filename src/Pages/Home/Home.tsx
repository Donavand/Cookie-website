import "./Home.css";

import React from "react";

import { Center, TextConstants } from "../../common";

/**
 * The home page, which contains the welcome message and all information about the website we want to be seen first
 *
 * @returns The home page
 */
export const Home = (): JSX.Element => (
    <Center>
        <h1>{TextConstants.HOME.TITLE}</h1>
        <div>{TextConstants.HOME.CONTENT}</div>
    </Center>
);
