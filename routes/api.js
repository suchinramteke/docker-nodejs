const express = require("express");
const router = express.Router();
const verifyToken = require("../auth/auth")
///// Import Routes /////
var admin = require("../controller/admin/AdminController");
var common = require("../controller/CommonController");
var auth = require("../controller/AuthController");


//// Use Admin Routes //////
router.use("/admin",admin)

//// Use Common Routes //////
router.use("/common",verifyToken,common)

//// Use Auth Routes //////
router.use("/auth",auth)

module.exports = router;