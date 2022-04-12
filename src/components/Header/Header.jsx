import React from "react";
import "./Header.css";
import CustomLink from "../CustomLink/CustomLink";

function Header() {
  return (
    <header>
      <ul className="d-flex justify-content-between align-center my-5 mx-5">
        <li>
          <CustomLink to="/">Главная</CustomLink>
        </li>
        <li>
          <CustomLink to="/">Войти</CustomLink>
        </li>
        <li>
          <CustomLink to="/">Зарегистрироваться</CustomLink>
        </li>
        <li>
          <CustomLink to="about">О проекте</CustomLink>
        </li>
      </ul>
    </header>
  );
}

export default React.memo(Header);
