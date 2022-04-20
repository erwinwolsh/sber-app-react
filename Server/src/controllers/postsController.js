const { db } = require("./database/db.js");

const getPots = (req, res) => {
  const dataForClient = db.posts.map(({ authorId, ...rest }) => rest);
  res.json(dataForClient);
};

const getCurrenttPost = (req, res) => {
  const { id } = req.params;
  const dataForClient = db.posts.find((post) => post.postId === id);
  if (dataForClient) {
    return res.json(dataForClient);
  }
  return res.sendStatus(404);
};

const createPost = (req, res) => {
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
};

const updatePost = (req, res) => {
  const { id } = req.params;

  const currentPostIndex = db.posts.findIndex((post) => post.id === +id);

  if (currentPostIndex === -1) return res.sendStatus(404);

  if (!Object.values(req.body).every((value) => !!value))
    return res.sendStatus(400);

  db.posts[currentPostIndex] = {
    ...db.posts[currentPostIndex],
    ...req.body,
  };

  return res.json(db.posts[currentPostIndex]);
};

const deletePost = (req, res) => {
  const { id } = req.params;
  const index = db.posts.findIndex((post) => post.postId == id);
  if (index > -1) {
    db.posts.splice(index, 1);

    return res.sendStatus(200);
  }
  return res.sendStatus(404);
};

module.exports = {
  getPots,
  getCurrenttPost,
  createPost,
  updatePost,
  deletePost,
};
