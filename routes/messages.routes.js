const express = require("express");

// import message controller
const messagesController = require("../controllers/messages.controller");

// create a new router using express router
const messagesRouter = express.Router();

// endpoints and controllers implementation to make requests for messages API
messagesRouter.get("/", messagesController.getMessages);
messagesRouter.post("/new", messagesController.postMessage);

// export messages router
module.exports = messagesRouter;
