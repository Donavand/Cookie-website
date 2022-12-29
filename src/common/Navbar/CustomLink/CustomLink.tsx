import React, { type ReactNode } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

type CustomLinkProperties = {
    href?: string;
    children: ReactNode;
    to: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- disabled
    properties?: any;
};

/**
 * The Custom Link component
 *
 * @param props - The properties of the component
 * @param props.href - The href link that the custom link is using
 * @param props.children - The child that this custom link is wrapping
 * @param props.to - The destination link
 * @returns the custom link component with the properties outlined in the jsdoc
 */
export const CustomLink = ({
    href: _href,
    children,
    to,
    ...properties
}: CustomLinkProperties): JSX.Element => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ end: true, path: resolvedPath.pathname });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...properties}>
                {children}
            </Link>
        </li>
    );
};
