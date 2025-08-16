import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className={"navbar"}>
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            data-nav-link
          >
            About
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            data-nav-link
          >
            Skills
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            data-nav-link
          >
            Projects
          </NavLink>
        </li>

        {/* <li className="navbar-item">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            data-nav-link
          >
            Blog
          </NavLink>
        </li> */}

        <li className="navbar-item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            data-nav-link
          >
            Contact
          </NavLink>
        </li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
