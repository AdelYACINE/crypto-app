import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import NavContext from "../../context/navbarContext/NavContext";

const Navbar = () => {
  const { isCollapsed, toggleCollapse } = useContext(NavContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="assets/pic-3.png" alt="pic1" className="brand-img" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${!isCollapsed ? "" : "show"}`}
            id="navbarColor01"
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    `nav-link ${navData.isActive ? "active" : ""}`
                  }
                  to="/"
                  onClick={toggleCollapse}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    `nav-link ${navData.isActive ? "active" : ""}`
                  }
                  to="/crypto"
                  onClick={toggleCollapse}
                >
                  Crypto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
