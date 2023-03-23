const express = require("express");

// importing controllers
const messagesController = require("./controllers/messages.controller");
const friendsController = require("./controllers/friends.controller");

// create new express app
const app = express();

// define app port
const PORT = 8000;

// implement middleware to get info about the request being done
app.use((req, res, next) => {
  console.log(`method: ${req.method}, url: ${req.url}`);
  next();
});

// use express middleware to parse the incoming data stream to JSON
app.use(express.json());

// endpoints and controllers implementation to make requests for friends API
app.get("/friends", friendsController.getFriends);
app.get("/friends/:friendId", friendsController.getFriend);
app.post("/friends/new", friendsController.postFriend);

// endpoints and controllers implementation to make requests for messages API
app.get("/messages", messagesController.getMessages);
app.post("/messages/new", messagesController.postMessage);

// initialize express server on defined PORT
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
