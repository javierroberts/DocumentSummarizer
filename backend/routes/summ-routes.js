const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const summControllers = require("../controllers/summ-controllers");

router.use(bodyParser.json());
router.post("/", summControllers.postSumm);
router.get("/", summControllers.getSumm);

module.exports = router;
