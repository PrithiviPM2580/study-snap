import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src="./study.png" alt="Study Snap Logo" />
        </Link>
        <Button asChild>
          <Link to="/login">Dashboard</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
