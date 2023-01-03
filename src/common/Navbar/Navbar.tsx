import React from "react";
import { Link } from "react-router-dom";

import { TextConstants } from "../constants";
import { CustomLink } from "./CustomLink";

/**
 * Navbar
 *
 * @returns The navbar
 */
export const Navbar = (): JSX.Element => (
    <nav className="nav">
        <Link className="Home" to="/">
            {TextConstants.NAVBAR.BRAND}
        </Link>
        <ul>
            <CustomLink to="/">{TextConstants.NAVBAR.LINK_ONE}</CustomLink>
            <CustomLink to="/contact">
                {TextConstants.NAVBAR.LINK_TWO}
            </CustomLink>
            <CustomLink to="/about">
                {TextConstants.NAVBAR.LINK_THREE}
            </CustomLink>
        </ul>
    </nav>
);
