import PostItem from "../PostItem/PostItem";

const Posts = ({ posts }) => {
  return (
    <div className="container">
      <div className="row my-5">
        {posts.map((post) => {
          return (
            <PostItem
              id={post.id}
              login={post.login}
              text={post.text}
              img={post.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
