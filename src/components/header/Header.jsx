import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
	return (
		<nav>
			<span>
				<Link to="/">Home</Link> | <Link to="resume">Resume</Link>
			</span>
			<div />
		</nav>
	);
}

export default Header;
