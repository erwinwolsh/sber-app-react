import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../Modal/Modal";
import FormModal from "../../Form/FormModal/FormModal";

const PostDetail = ({ nickname, text, img }) => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [viewModal, setViewModal] = useState(false);

  const controller = useRef(new AbortController());

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
      signal: controller.current.signal,
    })
      .then((response) => response.json())
      .then((dataFromServer) => setPost(dataFromServer));

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      controller.current.abort();
    };
  }, []);

  const openModal = () => {
    setViewModal(true);
  };

  const closeModal = () => {
    setViewModal(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log();

    const formData = Object.fromEntries(new FormData(e.target).entries());

    const response = await fetch(
      `http://localhost:3000/api/v1/posts/${post.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.status === 200) {
      const updatedPostFromServer = await response.json();
      setPost(updatedPostFromServer);
      closeModal();
      e.target.reset();
    } else {
      alert("Wrong data");
    }
  };

  const content = () => {
    if (!post.id) {
      return <strong>Loading...</strong>;
    }

    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{nickname}</h5>
            <p className="card-text">{text}</p>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn btn-primary mx-1"
            >
              Go back
            </button>
            <button
              type="button"
              onClick={openModal}
              className="btn btn-success mx-1"
            >
              Edit
            </button>
          </div>
        </div>
        <Modal state={viewModal} onClose={closeModal}>
          <FormModal onSubmit={submitHandler} {...post} />
        </Modal>
      </>
    );
  };

  return <div className="d-flex justify-content-center">{content()}</div>;
};

export default PostDetail;
