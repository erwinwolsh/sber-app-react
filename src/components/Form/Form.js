import { useState } from "react";
import "./Form.css";

const Form = ({ addNewPost }) => {
  // Добавляем логин
  const [login, setLogin] = useState(" ");
  const changeLogin = (e) => {
    setLogin(e.target.value);
  };

  // Добавляем текст поста
  const [text, setText] = useState(" ");
  const changeText = (e) => {
    setText(e.target.value);
  };

  // Добавляем картинку поста
  const [img, setImg] = useState(" ");
  const changeImg = (e) => {
    setImg(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    addNewPost(login, text, img);
    setLogin(" ");
    setText(" ");
    setImg(" ");
  };

  return (
    <div className="container form-wrapper">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <input
            onChange={changeLogin}
            type="text"
            className="form-control"
            id="login"
            placeholder="What's your name?"
            value={login}
          />
        </div>
        <div className="mb-3">
          <input
            onChange={changeText}
            type="text"
            className="form-control"
            id="text"
            value={text}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            onChange={changeImg}
            type="text"
            id="text"
            value={img}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post It
        </button>
      </form>
    </div>
  );
};

export default Form;
