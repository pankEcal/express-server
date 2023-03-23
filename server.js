const express = require("express");

// creating express server
const app = express();

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

// setting middleware. runs before reach request
// next() will allow the flow to respective route handlers
app.use((req, res, next) => {
  console.log(`method: ${req.method}, url: ${req.url}`);
  next();
});

// use express middleware to parse the incoming data stream to JSON
app.use(express.json());

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
  // create new friend object and push to existing data
  const { id, name } = req.body;
  // error handling based on value
  if (!name) {
    res.status(400).json({
      error: "missing name value!",
    });
  } else {
    const newFriend = {
      id: id,
      name: name,
    };
    friends.push(newFriend);
    res.json(newFriend);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
