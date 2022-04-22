const express = require("express");
const {
  getPost,
  getCurrenttPost,
  createPost,
  updatePost,
} = require(".src/controllers/postsController.js");

const postsRouter = express.Router();

postsRouter.route("/").get(getPost).post(createPost);

postsRouter
  .route("/:id")
  .get(getCurrenttPost)
  .patch(updatePost)
  .delete(deletePost);

// postsRouter.post("/api/v1/newpost", createPost);

module.exports = {
  postsRouter,
};
