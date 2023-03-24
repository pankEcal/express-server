const express = require("express");
const path = require("path");

// imorting routes
const friendsRouter = require("./routes/friends.routes");
const messagesRouter = require("./routes/messages.routes");

// create new express app
const app = express();

// set handlebar as view engine and provide path for view
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
// provide static path to serve static files
app.use(express.static(path.join(__dirname, "public")));

// define app port
const PORT = 8000;

// implement middleware to get info about the request being done
app.use((req, res, next) => {
  console.log(`method: ${req.method}, url: ${req.baseUrl}${req.url}`);
  next();
});

// use express middleware to parse the incoming data stream to JSON
app.use(express.json());

// implement templating engine to serve "/"
app.get("/", (req, res) => {
  res.render("index", {
    title: "title from hbr",
    caption: "caption from hbr",
  });
});

// implment routes middlewares and mounting relevent routes
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

// implement static serving from public folder with "/static"
app.use("/static", express.static(path.join(__dirname, "public")));

// initialize express server on defined PORT
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
