import React from "react";
import "./Header.css";
// import CustomLink from "../CustomLink/CustomLink";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-light bg-light navbar-expand-lg my-5 mx-5">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <NavLink className="nav-link" to="/">
                Главная
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="nav-link" to="/">
                Войти
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="nav-link" to="/">
                Зарегистрироваться
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="nav-link" to="about">
                О проекте
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default React.memo(Header);
