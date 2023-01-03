import "./Home.css";

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Center, TextConstants } from "../../common";
import cookies1 from "./cookies1.jpg";

/**
 * The home page, which contains the welcome message and all information about the website we want to be seen first
 *
 * @returns The home page
 */
export const Home = (): JSX.Element => (
    <Center>
        <h1>{TextConstants.HOME.TITLE}</h1>
        <div>{TextConstants.HOME.CONTENT}</div>
        <Carousel>
            <Carousel.Item>
                <img
                    src={cookies1}
                    style={{ height: "800px", width: "100%" }}
                />
            </Carousel.Item>
            <Carousel.Caption>
                <h3>{"p1"}</h3>
                <p>{"p1"}</p>
            </Carousel.Caption>
        </Carousel>
    </Center>
);
