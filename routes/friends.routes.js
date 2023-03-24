const express = require("express");

// import friends controller
const friendsController = require("../controllers/friends.controller");

// create a new router using express router
const friendsRouter = express.Router();

// endpoints and controllers implementation to make requests for friends API
friendsRouter.get("/photo", friendsController.getPhoto);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:friendId", friendsController.getFriend);
friendsRouter.post("/new", friendsController.postFriend);

// export friends router
module.exports = friendsRouter;

// Templating Engines

// - all templating engine is same with different syntax
// - allows to populate HTML with data before serving on client
// - need to define which templating engine is being used
// - app.set("view engine", "hbs")
// - app.set("views", path.join(__dirname, "views"))
