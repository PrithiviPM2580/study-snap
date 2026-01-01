import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
	return (
		<header className="header">
			<nav className="navs">
				<Link to="/" className="link-img">
					<img src="./svgs/study.svg" alt="Study Snap Logo" />
				</Link>
				<Button asChild className="navbar-btn bg-study-snap-700  rounded-full">
					<Link to="/login">Dashboard</Link>
				</Button>
			</nav>
		</header>
	);
};

export default Navbar;
