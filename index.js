const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello from Subham!</h1>");
});

app.get("/api/v1/linkedin", (req, res) => {
  const linkedin = {
    id: "its_subham_dutta",
    following: 115,
    follower: 90,
  };

  res.status(200).json(linkedin);
});

app.get("/api/v1/twitter", (req, res) => {
  const twitter = {
    id: "subhamd588",
    following: 150,
    follower: 10,
  };

  res.status(200).json(twitter);
});

app.get("/api/v1/github", (req, res) => {
  const github = {
    id: "Sduttt",
    following: 4,
    follower: 3,
  };

  res.status(200).json(github);
});

app.get("/api/v1/:token", (req, res) => {
  res.status(200).send(req.params.token);
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
