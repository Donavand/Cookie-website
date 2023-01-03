import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Center, TextConstants } from "../../common";
import cookies1 from "./cookies1.jpg";
import cookies2 from "./cookies2.jpg";
import cookies3 from "./cookies3.jpg";
import cookies4 from "./cookies4.jpg";
import "./Home.css";

/**
 * The home page, which contains the welcome message and all information about the website we want to be seen first
 *
 * @returns The home page
 */
export const Home = (): JSX.Element => (
    <Center>
        <div className="home_layout">
            <h1>{TextConstants.HOME.TITLE}</h1>
            <div className="home_subtitle">{TextConstants.HOME.CONTENT}</div>
            <Carousel>
                <Carousel.Item>
                    <img className="carousel_image" src={cookies1} />
                    <Carousel.Caption>
                        <h3>{TextConstants.HOME.COOKIE_1_TITLE}</h3>
                        <p>{TextConstants.HOME.COOKIE_1_SUBTITLE}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel_image" src={cookies2} />
                    <Carousel.Caption>
                        <h3>{TextConstants.HOME.COOKIE_2_TITLE}</h3>
                        <p>{TextConstants.HOME.COOKIE_2_SUBTITLE}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel_image" src={cookies3} />
                    <Carousel.Caption>
                        <h3>{TextConstants.HOME.COOKIE_3_TITLE}</h3>
                        <p>{TextConstants.HOME.COOKIE_3_SUBTITLE}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel_image" src={cookies4} />
                    <Carousel.Caption>
                        <h3>{TextConstants.HOME.COOKIE_4_TITLE}</h3>
                        <p>{TextConstants.HOME.COOKIE_4_SUBTITLE}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </Center>
);
