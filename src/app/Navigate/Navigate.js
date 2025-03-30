import { NavLink } from "react-router";
import './Navigate.css';

function Navigate() {
  return (
    <nav className="nav-bar">
      <ul className="nav-ul">
        <li>
          <NavLink to="/">
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/learning">
            learning
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigate;