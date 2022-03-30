import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [posts, setPosts] = useState([]);

  const addNewPost = (login, text, img) => {
    setPosts((prev) => [
      ...prev,
      {
        id: Date.now(),
        login,
        text,
        img,
      },
    ]);
  };

  console.log(posts);

  return (
    <div className="App">
      <Header />
      <Main addNewPost={addNewPost} posts={posts} />
      <Footer />
    </div>
  );
}

export default App;
