import { NavLink } from "react-router";
import './Navigate.css';

function Navigate() {
  return (
    <nav className="Navigate">
      <NavLink to="/">
        home
      </NavLink>
      <NavLink to="/about">
        about
      </NavLink>
      <NavLink to="/projects">
        projects
      </NavLink>
      <NavLink to="/learning">
        learning
      </NavLink>
    </nav>
  );
}

export default Navigate;