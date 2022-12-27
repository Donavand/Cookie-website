import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Navbar() {
	return (
		<nav className="nav">
			<Link to="/" className="Bac N Cookies">
				Bac N Cookies
			</Link>
			<ul>
				<CustomLink to="/contact">Contact</CustomLink>
				<CustomLink to="/about">About</CustomLink>
			</ul>
		</nav>
	);
}

function CustomLink({ href, children, to, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	);
}
