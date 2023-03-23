// importing models
const model = require("../models/friends.model");
const friendsDb = model.friends;

// method to handle GET request for "/friends"
function getFriends(req, res) {
  const friends = friendsDb;
  if (!friends) {
    res.status(404).json({
      error: "friends not found",
    });
  } else {
    res.status(200).json(friends);
  }
}

// method to handle GET request for "/friends/:paramter"
function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friendsDb[friendId];
  if (!friend) {
    res.status(404).json({
      error: "friend not found",
    });
  } else {
    res.status(200).json(friend);
  }
}

// method to handle POST request for "/friends/new"
function postFriend(req, res) {
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
    friendsDb.push(newFriend);
    res.json(newFriend);
  }
}

// exporting defined methods
module.exports = {
  getFriends,
  getFriend,
  postFriend,
};
