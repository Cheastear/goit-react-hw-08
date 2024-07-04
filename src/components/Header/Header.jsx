import { NavLink } from "react-router-dom";

import css from "./Header.module.css";

function Header() {
  return (
    <header className={css.header}>
      <nav>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="/tasks" className={css.link}>
          Tasks
        </NavLink>
        <div className={css.auth}>
          <NavLink to="/register" className={css.link}>
            Register
          </NavLink>
          <NavLink to="/logIn" className={css.link}>
            Log in
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
