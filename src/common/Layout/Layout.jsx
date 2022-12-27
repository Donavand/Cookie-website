import { Navbar } from "../Navbar/Navbar";
import styles from "./Layout.module.css";

/**
 * Reusable component, that takes in a child prop, and wraps the navbar around it, providing
 * the background photo, and the child in an organized flexbox.
 *
 * @param props - The properties of the component
 * @param props.children - The children of this component\
 * @returns {JSX.Element} The Layout Component
 */
export default function Layout({ children }) {
	return (
		<div className={styles.main_layout}>
			<div className={styles.navbar_layout}>
				<Navbar />
			</div>
			<div className={styles.children_layout}>{children}</div>
		</div>
	);
}
