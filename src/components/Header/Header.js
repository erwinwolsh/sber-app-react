import "./Header.css";

const Header = () => {
  return (
    <header>
      <ul className="d-flex justify-content-between align-center my-5 mx-5">
        <li>Главная страница</li>
        <li>Войти</li>
        <li>Зарегистрироваться</li>
      </ul>
    </header>
  );
};

export default Header;
