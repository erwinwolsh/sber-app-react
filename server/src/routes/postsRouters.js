const express = require("express");

const postsRouter = express.Router();

postsRouter.get("/api/v1/posts", (req, res) => {
  const dataForClient = db.posts.map(({ authorId, ...rest }) => rest);
  res.json(dataForClient);
});

postsRouter.get("/api/v1/posts/:id", (req, res) => {
  const { id } = req.params;
  const dataForClient = db.posts.find((post) => post.postId === id);
  if (dataForClient) {
    return res.json(dataForClient);
  }
  return res.sendStatus(404);
});

postsRouter.post("/api/v1/newpost", (req, res) => {
  // сделать проверку  что все поля заполнены
  const dataFromClient = req.body;

  const newPost = {
    ...dataFromClient,
    postId: uuidv4(), // - определяется на реакте
  };

  db.posts.push(newPost);
  console.log(newPost);

  return res.json(newPost);
  // res.redirect("/");
});

postsRouter.delete("/api/v1/posts/:id", (req, res) => {
  const { id } = req.params;
  const index = db.posts.findIndex((post) => post.postId == id);
  if (index > -1) {
    db.posts.splice(index, 1);

    return res.sendStatus(200);
  }
  return res.sendStatus(404);
});

module.exports = {
  postsRouter,
};
