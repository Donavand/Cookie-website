import "./Center.css";

import React, { type ReactNode } from "react";

type CenterProperties = {
    children: ReactNode;
};

/**
 * Center
 *
 * @param props - props
 * @returns Center
 */
export const Center = ({ children }: CenterProperties): JSX.Element => (
    <div
        style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
        }}
    >
        {children}
    </div>
);
