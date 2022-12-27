import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

/**
 * Navbar component, links to the homepage, about page, and contact page
 */
export function Navbar() {
	const [activeLinks, setActiveLinks] = React.useState({
		about: false,
		contact: false,
		home: false,
	});

	React.useEffect(() => {
		setActiveLinks(() => ({
			about: window.location.pathname === "/about",
			contact: window.location.pathname === "/contact",
			home: window.location.pathname === "/home",
		}));
	}, []);

	return (
		<div className={`${styles.navbar_container} box_shadow`}>
			<span className={`${styles.navbar_brand}`}>Bac N Cookies</span>
			<div className={`${styles.navbar_links}`}>
				<span
					className={
						activeLinks.home
							? styles.navbar_link_active
							: styles.navbar_link_inactive
					}
				>
					<Link
						className={`${
							activeLinks.home
								? styles.navbar_link_link_active
								: styles.navbar_link_link_inactive
						}`}
						to={activeLinks.home ? "#" : "/"}
					>
						Home
					</Link>
				</span>
				<span
					className={
						activeLinks.contact
							? styles.navbar_link_active
							: styles.navbar_link_inactive
					}
				>
					<Link
						className={`${
							activeLinks.contact
								? styles.navbar_link_link_active
								: styles.navbar_link_link_inactive
						}`}
						to={activeLinks.contact ? "#" : "/contact"}
					>
						Contact
					</Link>
				</span>
				<span
					className={
						activeLinks.about
							? styles.navbar_link_active
							: styles.navbar_link_inactive
					}
				>
					<Link
						className={`${
							activeLinks.about
								? styles.navbar_link_link_active
								: styles.navbar_link_link_inactive
						}`}
						to={activeLinks.about ? "#" : "/about"}
					>
						About
					</Link>
				</span>
			</div>
		</div>
	);
}
