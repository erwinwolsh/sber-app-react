const express = require("express");
const {
  getPots,
  getCurrenttPost,
  createPost,
  updatePost,
} = require(".src/controllers/postsController.js");

const postsRouter = express.Router();

postsRouter.route("/").get(getPots).post(createPost);

postsRouter
  .route("/:id")
  .get(getCurrenttPost)
  .patch(updatePost)
  .delete(deletePost);

// postsRouter.post("/api/v1/newpost", createPost);

module.exports = {
  postsRouter,
};
