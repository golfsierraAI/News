const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const inshorts = require("inshorts-api");
mongoose.connect("mongodb://localhost:27017/projectDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const schema = new mongoose.Schema({
  Firstname: String,
  Lastname: String,
  Email: String,
  Password: String,
  checkBox: String,
});
const user = mongoose.model("user", schema);
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/signUp", (req, res) => {
  const b = user.exists({ Email: req.body.Email }, (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else {
      if (result) {
        res.send(false);
      } else {
        const newUser = new user({
          Firstname: req.body.Firstname,
          Lastname: req.body.Lastname,
          Email: req.body.Email,
          Password: req.body.Password,
          checkBox: req.body.checkBox,
        });
        newUser.save();
        res.send(true);
        console.log("Added");
      }
    }
  });
});
app.post("/userInfo", (req, res) => {}).listen(8080);
