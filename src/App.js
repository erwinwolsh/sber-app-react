import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PostProvider from "./contexts/PostContext";

function App() {
  // const [posts, setPosts] = useState([]);

  // const addNewPost = (login, text, img) => {
  //   setPosts((prev) => [
  //     ...prev,
  //     {
  //       id: Date.now(),
  //       login,
  //       text,
  //       img,
  //       liked: false,
  //     },
  //   ]);
  // };

  // const deletePost = (id) => {
  //   setPosts((prev) => prev.filter((post) => post.id !== id));
  // };

  // const likedPost = (id) => {
  //   setPosts((prev) =>
  //     prev.map((post) => {
  //       if (post.id === id) {
  //         return {
  //           ...post,
  //           liked: !post.liked,
  //         };
  //       }
  //       return post;
  //     })
  //   );
  // };

  // const clearPosts = () => {
  //   setPosts([]);
  // };

  return (
    <PostProvider>
      <div className="container my-5">
        <Header />
        <Main
        // addNewPost={addNewPost}
        // posts={posts}
        // deletePost={deletePost}
        // likedPost={likedPost}
        />
        {/* <Footer clearPosts={clearPosts} /> */}
        <Footer />
      </div>
    </PostProvider>
  );
}

export default App;
