const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  res.status(201).send(posts[id]);
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;

  if (!posts[id]) {
    return res.status(404).json({ error: "Post not found" });
  }

  delete posts[id];

  res.status(200).send({ message: "Post deleted successfully" });
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
