import PostItem from "../PostItem/PostItem";

const Posts = ({ posts, deletePost, likedPost }) => {
  return (
    <div className="container">
      <div className="row my-5">
        {posts.map((post, i) => {
          return (
            <PostItem
              likedPost={likedPost}
              deletePost={deletePost}
              key={post.id}
              id={post.id}
              index={i}
              login={post.login}
              text={post.text}
              img={post.img}
              liked={post.liked}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
