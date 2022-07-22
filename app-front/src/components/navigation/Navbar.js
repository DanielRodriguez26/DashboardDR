import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // <-- import styles to be used

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
                        <i className="fas fa-bars" />
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
            <ul className="navbar-nav ml-auto">
                {/* Notifications Dropdown Menu */}
                <li className="nav-item dropdown show">
                    <Link
                        className="nav-link"
                        data-toggle="dropdown"
                        to="#"
                        aria-expanded="true"
                    >
                        <FontAwesomeIcon icon="fa-solid fa-check-square" />
                    </Link>
                    <div
                        className="dropdown-menu dropdown-menu-lg dropdown-menu-right show"
                        style={{ left: "inherit", right: 0 }}
                    >
                        <span className="dropdown-item dropdown-header">
                            15 Notifications
                        </span>
                        <div className="dropdown-divider" />
                        <Link to="#" className="dropdown-item">
                            <i className="fas fa-envelope mr-2" /> 4 new
                            messages
                            <span className="float-right text-muted text-sm">
                                3 mins
                            </span>
                        </Link>
                        <div className="dropdown-divider" />
                        <Link to="#" className="dropdown-item">
                            <i className="fas fa-users mr-2" /> 8 friend
                            requests
                            <span className="float-right text-muted text-sm">
                                12 hours
                            </span>
                        </Link>
                        <div className="dropdown-divider" />
                        <Link to="#" className="dropdown-item">
                            <i className="fas fa-file mr-2" /> 3 new reports
                            <span className="float-right text-muted text-sm">
                                2 days
                            </span>
                        </Link>
                        <div className="dropdown-divider" />
                        <Link to="#" className="dropdown-item dropdown-footer">
                            See All Notifications
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
}
