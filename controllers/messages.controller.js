const model = require("../models/messages.model");
const messageDb = model.messages;

function getMessages(req, res) {
  if (!messageDb) {
    res.status(404).json({
      error: "messages not found!",
    });
  } else {
    res.status(200).json(messageDb);
  }
}

function getMessage(req, res) {
  res.send("<h2> Message controller: getMessage() </h2>");
}

function postMessage(req, res) {
  const { id, message } = req.body;
  const newMessage = {
    id: id,
    message: message,
  };

  if (!message) {
    res.status(404).json({
      error: "missing message! ",
    });
  } else {
    messageDb.push(newMessage);
    res.status(200).json(newMessage);
  }
}

module.exports = {
  getMessages,
  getMessage,
  postMessage,
};
