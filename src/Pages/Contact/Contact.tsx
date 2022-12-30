import styles from "./Contact.module.css";

import React from "react";

import { Center, TextConstants } from "../../common";

/**
 * The contact page, which contains all the contact information
 *
 * @returns The contact page
 */
export const Contact = (): JSX.Element => (
    <Center>
        <div className={styles.contact_layout}>
            <h1>{TextConstants.CONTACT.TITLE}</h1>

            <div className={styles.contact_information}>
                <div className={styles.contact_phone_number}>
                    <i
                        className={`fa-sharp fa-solid fa-phone ${styles.contact_phone_number_icon}`}
                    />
                    <a
                        className={styles.contact_phone_number_link}
                        href="tel:+1-267-978-5155"
                    >
                        {TextConstants.CONTACT.PHONE}
                    </a>
                </div>
                <div className={styles.contact_email}>
                    <i
                        className={`fa-sharp fa-solid fa-envelope ${styles.contact_email_icon}`}
                    />
                    <a
                        className={styles.contact_email_link}
                        href="mailto:chriscookies1@gmail.com"
                    >
                        {TextConstants.CONTACT.EMAIL}
                    </a>
                </div>
            </div>
        </div>
    </Center>
);
