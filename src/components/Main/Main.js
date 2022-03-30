import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import "./Main.css";

const Main = ({ addNewPost, posts }) => {
  return (
    <>
      <Form addNewPost={addNewPost} />
      <Posts posts={posts} />
    </>
  );
};

export default Main;
