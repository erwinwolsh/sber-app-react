const express = require("express");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const { postsRouter } = require("./src/routes/postsRouter.js");
// const { postsController } = require(".src/controllers/postsController.js");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}`);
});
