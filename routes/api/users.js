const express = require("express"); //import express
const router = express.Router(); //add on express to .Router

//@route GET api/users/test
//@description test users route
//@access public access
router.get("/test", (req, res) => res.json({ msg: "Users works" })); //router.get to get route

module.exports = router; //export router so it can be used in server.js
