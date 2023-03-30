var express = require("express");
var app = express();
var PORT = process.env.PORT || 4000;
app.get("/", function (req, res) {
    res.status(200).send("<h1>Hello from Subham!</h1>");
});
app.get("/api/v1/linkedin", function (req, res) {
    var linkedin = {
        id: "its_subham_dutta",
        following: 115,
        follower: 90
    };
    res.status(200).json(linkedin);
});
app.get("/api/v1/twitter", function (req, res) {
    var twitter = {
        id: "subhamd588",
        following: 150,
        follower: 10
    };
    res.status(200).json(twitter);
});
app.get("/api/v1/github", function (req, res) {
    var github = {
        id: "Sduttt",
        following: 4,
        follower: 3
    };
    res.status(200).json(github);
});
app.get("/api/v1/:token", function (req, res) {
    res.status(200).send(req.params.token);
});
app.listen(PORT, function () {
    console.log("server is running at port ".concat(PORT));
});
