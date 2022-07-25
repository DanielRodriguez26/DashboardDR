import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // <-- import styles to be used

export default function Navbar() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        data-widget="pushmenu"
                        to="/"
                        role="button"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/" className="nav-link">
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Right navbar links */}
        </nav>
    );
}
