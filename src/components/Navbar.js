import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="primary-color">Notes App</h2>
            <div>
                <Link className="text-decoration-none" to="/">Home</Link>
                <Link className="text-decoration-none ms-3" to="/add">New Note123456</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;