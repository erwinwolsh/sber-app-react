import "./PostItem.css";

const PostItem = ({ id, login, text, img }) => {
  return (
    <div className="col-4 card mx-5">
      <h3> {login} </h3>
      <img src={img} />
      <p> {text} </p>
    </div>
  );
};

export default PostItem;
