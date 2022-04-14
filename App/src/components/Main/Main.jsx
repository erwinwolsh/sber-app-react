import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import "./Main.css";

// const Main = ({ addNewPost, posts, deletePost }) => {
//   return (
//     <>
//       <Form addNewPost={addNewPost} />
//       <Posts posts={posts} deletePost={deletePost} />
//     </>
//   );
// };

const Main = () => {
  return (
    <>
      <Form />
      <hr />
      <Posts />
    </>
  );
};

export default Main;
