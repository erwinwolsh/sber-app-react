import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import PostItem from "../PostItem/PostItem";

const Posts = () => {
  const { posts } = useContext(PostContext);
  return (
    <div className="container">
      <div className="row my-5">
        {posts.map((post, index) => {
          return (
            <PostItem
              // key={post.id}
              // id={post.id}
              // index={i}
              // login={post.login}
              // text={post.text}
              // img={post.img}
              // liked={post.liked}
              key={post.id}
              index={index}
              {...post}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
