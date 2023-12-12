import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
    return (
        <div className="navbar mt-5 mb-5 space-x-12 bg-primary text-primary-content">
            <Link to={"/"}>Home</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/about"}>About Me</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>Sign Up</Link>
            <Link to={"/profile"}>Profile</Link>

        </div>
    );
};

export default Navbar;