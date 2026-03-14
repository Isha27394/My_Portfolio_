import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    // Use a dark background class for pages other than Home
    const navClass = isHome ? "navlist-container" : "navlist-container navlist-dark-bg";

    return (
        <nav className={navClass}>
            <ul className="navlist">
                <li>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/certifications"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Certifications
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
