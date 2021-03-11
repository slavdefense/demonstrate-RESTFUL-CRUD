const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const intro = [
  { username: "gdawg", comment: " Hey this is me Gurkha!" },
  { username: "dips", comment: "Hey this is Dips" },
  { username: "shree", comment: "Hey yea! Nice to meet ya" },
];

app.get("/comments", (req, res) => {
  res.render("index", { intro });
});

app.listen(3000, (req, res) => {
  console.log("hi");
});
