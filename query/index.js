const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const axios = require("axios");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

if(type === 'PostCreated') {
    
}
if(type === 'CommentCreated') {

}

});

app.listen(4002, () => {
  console.log("Listening on port 4002...");
});
