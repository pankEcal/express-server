const express = require("express");
const bodyParser = require("body-parser");

// creating express server
const app = express();

// parse the incoming data from POST request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 8000;

// database
const friends = [
  {
    id: 0,
    name: "user 1",
  },
  {
    id: 1,
    name: "user 2",
  },
];

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "user not found",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send({
    key1: "val1",
  });
});

app.post("/friends/new", (req, res) => {
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
