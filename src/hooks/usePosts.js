//кастомный хук

import { useEffect, useState } from "react";

const LSPostsKey = "posts";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  const addNewPost = (login, text, img) => {
    const post = {
      id: Date.now(),
      login,
      text,
      img,
      liked: false,
    };

    setPosts((prev) => [...prev, post]);
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const likedPost = (id) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            liked: !post.liked,
          };
        }
        return post;
      })
    );
  };

  const clearPosts = () => {
    setPosts([]);
  };

  //Берет данные из LocalStorage
  useEffect(() => {
    const dataFromLS = localStorage.getItem("LSPostsKey");
    if (dataFromLS) {
      setPosts(JSON.parse(dataFromLS));
    }

    // else {
    //   // //Подключение фетч запроса, но он не подходит для проекта, просто как пример
    //   // fetch("https://jsonplaceholder.typicode.com/todos?_limit=7")
    //   //     .then(res => res.json())
    //   //     .then(data => data.map(({title, userId, ...rest }) => ({...rest, text: title})))
    //   //    .then((mapData) => setPosts(mapData))
    // }
  }, []);

  //Записывает данные в LocalStorage
  useEffect(() => {
    localStorage.setItem("LSPostsKey", JSON.stringify(posts));
  }, [posts]);

  return {
    posts,
    addNewPost,
    deletePost,
    likedPost,
    clearPosts,
  };
};

export default usePosts;
