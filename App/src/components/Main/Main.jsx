import Posts from "../Posts/Posts";
import "./Main.css";
import { motion } from "framer-motion";

// const Main = ({ addNewPost, posts, deletePost }) => {
//   return (
//     <>
//       <Form addNewPost={addNewPost} />
//       <Posts posts={posts} deletePost={deletePost} />
//     </>
//   );
// };

const headerVariants = {
  out: {
    opacity: 0,
    y: 100,
    rotate: 200,
  },
  in: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 2,
    },
  },
};

const Main = () => {
  return (
    <>
      <motion.div variants={headerVariants} initial="out" animate="in">
        <h1 className="text-center my-5">Выразите и вы свое видение мира!</h1>
        <p className="text-center my-5">
          Проект разработан специально для СберУниверситета
        </p>
      </motion.div>
      <div className="d-flex justify-content-center my-5">
        <motion.img
          animate={{ scale: 2 }}
          style={{ width: 100 }}
          src="https://www.meme-arsenal.com/memes/64446c534e97dcb7d4b94f68b73fbe0e.jpg"
        />
      </div>
      <hr />
      <Posts />
    </>
  );
};

export default Main;
