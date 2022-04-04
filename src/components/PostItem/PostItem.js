import "./PostItem.css";

const PostItem = ({ id, login, text, img, liked, deletePost, likedPost }) => {
  const deleteHandler = () => {
    deletePost(id);
  };

  const likedHandler = () => {
    likedPost(id);
  };

  return (
    <div className="col-4 card mx-5">
      <h3> {login} </h3>
      <img src={img} />
      <p> {text} </p>
      <div className="d-flex justify-content-baseline my-2">
        <button
          onClick={likedHandler}
          type="button"
          className="btn btn-success"
        >
          {liked ? "Not nice" : "Nice!"}
        </button>
      </div>
      <div>
        <button
          onClick={deleteHandler}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostItem;
