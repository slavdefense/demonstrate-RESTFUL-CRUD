const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
// const bodyParser = require("body-parser");
// const multer = require('multer')
// const upload = multer()
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const words = [
  { username: "gdawg", comment: "lol hey this is me" },
  { username: "dips", comment: "hey this is Dips" },
  { username: "shree", comment: "hey yea yea!" },
];

app.get("/comments", (req, res) => {
  res.render("index", { info: words });
});

app.get("/tacos", (req, res) => {
  //   const { tacos } = req.params;
  //   res.render("bell", { info: tacos });

  res.send("tacos get request");
});

app.post("/cars", (req, res) => {
  const { color, car } = req.body;

  res.send(`your color is ${color} and your car is ${car}`);
});
app.listen(3000, (req, res) => {
  console.log("hi");
});
