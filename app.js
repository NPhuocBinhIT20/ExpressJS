// import * as express from "express";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const post = 8080;
const router = require("./apiRouter");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

// const checkLoginAdmin = (req, res, next) => {
//   if (Login) {
//     req.user.role;
//     next();
//   }
// };

// const checkLogin = (req, res, next) => {
//   if (Login) {
//     req.user = user;
//     next();
//   } else {
//     console.log("Please Login");
//   }
// };
app.use("/api/v1/", router);

app.listen(post, () => {
  console.log(`Example app listening at http://localhost:${post}`);
});
