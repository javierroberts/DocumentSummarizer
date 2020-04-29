const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const userContrrolers = require("../controllers/userController");

router.use(bodyParser.json());
router.post("/login", userContrrolers.loginUser);
router.post("/create", userContrrolers.postUser);

module.exports = router;
