const express = require("express"); //imported express
const mongoose = require("mongoose"); //import mongoose

//connect routes files

const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");
const posts = require("./routes/api/posts");

const app = express(); //init express
const db = require("./config/keys").mongoURI; //database configuration

mongoose // connecting mongoose to mongoDB
  .connect(db)
  .then(() => console.log("MongoDB is connected")) //es6 promises if success
  .catch(err => console.log(err)); //if error

app.get("/", (req, res) => res.send("Hello World")); //set up  route

//to use routes
//app in this case is the router
app.use("/api/users", users);
app.use("/api/profiles", profiles);
app.use("/api/posts", posts);

const port = process.env.PORT || 5001; //to run your server on either heroku or local server

app.listen(port, () => console.log(`server is running on port ${port}`));
