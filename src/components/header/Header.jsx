import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
	return (
		<nav>
			<Link to="/">Home</Link> | <Link to="resume">Resume</Link> | <Link to="timeline">Timeline</Link>
		</nav>
	);
}

export default Header;
