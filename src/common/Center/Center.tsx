import React, { type ReactNode } from "react";

import styles from "./center.module.css";

// Creating a new type called CenterProperties
type CenterProperties = {
    /*
     * The value of CenterProperties is EQUAL to an object, that object has a property
     * called `children`, whose type is a ReactNode,
     * a ReactNode is any JSX element (in your terms, component)
     */
    children: ReactNode;
};

/**
 * Center
 *
 * @param props - props
 * @returns Center
 */
export const Center = ({ children }: CenterProperties): JSX.Element => (
    <div className={`${styles.layout}`}>{children}</div>
);
