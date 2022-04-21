import { useEffect, useRef } from "react";

function FormModal({
  onSubmit,
  nickname = "",
  text = "",
  img = "",
  hashtag = "",
}) {
  const formRef = useRef(null);

  useEffect(() => {
    formRef.current.elements.nickname.value = nickname;
    formRef.current.elements.text.value = text;
    formRef.current.elements.img.value = img;
    formRef.current.elements.hashtag.value = hashtag;
  }, [hashtag, img, nickname, text]);

  return (
    <div className="container form-wrapper">
      <h1 className="my-3">Your future post</h1>
      <form ref={formRef} onSubmit={onSubmit}>
        <div className="mb-3">
          <label for="login" class="form-label">
            Your login
          </label>
          <input
            type="text"
            className="form-control"
            id="nickname"
            placeholder="What's your name?"
            name="nickname"
          />
        </div>
        <div className="mb-3">
          <label for="text" class="form-label">
            Write something
          </label>
          <input type="text" className="form-control" id="text" name="text" />
        </div>
        <div className="mb-3">
          <label for="img" class="form-label">
            Your picture
          </label>
          <input className="form-control" type="text" id="img" name="img" />
        </div>
        <div className="mb-3">
          <label for="hashtag" class="form-label">
            Write hashtag
          </label>
          <input
            className="form-control"
            type="text"
            id="hashteg"
            name="hashtag"
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <button type="submit" className="btn btn-primary">
            Post It
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormModal;
