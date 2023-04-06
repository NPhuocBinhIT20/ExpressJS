import * as express from "express";
// const express = require("express");
const app = express();
const post = 8080;

app.get("/", (req, res) => {
  res.json("Hello Express!");
});

app.listen(post, () => {
  console.log(`Example app listening at http://localhost:${post}`);
});
