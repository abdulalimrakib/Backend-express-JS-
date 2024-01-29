import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-center gap-5">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
    )
}

export default Navbar