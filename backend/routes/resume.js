var express = require("express");
var router = express.Router();
const { home, generateResume } = require("../controllers/resume");
const { signUp, signin, isSignedIn } = require("../controllers/auth");

router.get("/", home);

router.post("/resume", generateResume);

router.post("/signup", signUp);
router.post("/signin", signin);

module.exports = router;
