import "./Contact.css";

import React from "react";

import { Center, TextConstants } from "../../common";

/**
 * The contact page, which contains all the contact information
 *
 * @returns The contact page
 */
export const Contact = (): JSX.Element => (
    <Center>
        <h1>{TextConstants.CONTACT.TITLE}</h1>

        <i className="fa-sharp fa-solid fa-phone" />
        <a href="tel:+1-267-978-5155">{TextConstants.CONTACT.PHONE}</a>
        <br />
        <i className="fa-sharp fa-solid fa-envelope" />
        <a href="mailto:chriscookies1@gmail.com">
            {TextConstants.CONTACT.EMAIL}
        </a>
    </Center>
);
