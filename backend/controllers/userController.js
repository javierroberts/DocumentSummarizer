var mongo = require("../mongo");
var unirest = require("unirest");

const postUser = async (req, res, next) => {
  let token;

  token = await mongo.createUser(req.body.username, req.body.password);
  res.json({ token: token });
};

const loginUser = async (req, res, next) => {
  console.log("HIIIIIIIIIITTTTTTT");
  let token;
  token = await mongo.loginUser(req.body.username, req.body.password);
  res.json({ token: token });
};

exports.postUser = postUser;
exports.loginUser = loginUser;
