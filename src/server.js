// Server
const express = require("express");
const server = express();

const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses,
} = require("./pages");

// Nunjucks template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

// Start and server config

server
  //receive data from req.body
  .use(express.urlencoded({ extended: true }))
  //configure static files (css, scripts, images)
  .use(express.static("public"))
  //rotas for the App
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)
  //server start at door 5500
  .listen(5500);
