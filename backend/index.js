const express = require("express");
const cors = require("cors");
const User = require("./db/User");

// Require db config. This helps in modular code
require("./db/config");

// Require users schema
const users = require("./db/User");

const app = express();
app.use(cors());

var PORT = 5000;
app.use(express.json());
// Creating a Route
// Without middleware
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});

//app.listen(5000);
