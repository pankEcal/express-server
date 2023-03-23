const express = require("express");

// import friends controller
const friendsController = require("../controllers/friends.controller");

// create a new router using express router
const friendsRouter = express.Router();

// endpoints and controllers implementation to make requests for friends API
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:friendId", friendsController.getFriend);
friendsRouter.post("/new", friendsController.postFriend);

// export friends router
module.exports = friendsRouter;
