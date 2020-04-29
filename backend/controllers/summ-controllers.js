var mongo = require("../mongo");
var unirest = require("unirest");
var jwt = require("jsonwebtoken");
var pump = require("pump");

const postSumm = (req, res, next) => {
  const token = req.headers.authorization;

  let decodedToken;

  if (token != "-1") {
    try {
      decodedToken = jwt.verify(token, "javistokenstring1212");
    } catch {
      console.log("ERROR verifying");
    }
  }

  var req_api = unirest(
    "GET",
    "https://meaningcloud-summarization-v1.p.rapidapi.com/summarization-1.0"
  );

  const text = req.body.text;
  if (req.body.type == "cp") {
    req_api.query({
      txt: text,
      sentences: "2"
    });
  } else if (req.body.type == "url") {
    req_api.query({
      url: text,
      sentences: "2"
    });
    // } else if (req.body.type == "file") {
    //   req_api.query({
    //     file: text,
    //     sentences: "2"
    //   });
  }

  req_api.headers({
    "x-rapidapi-host": "meaningcloud-summarization-v1.p.rapidapi.com",
    "x-rapidapi-key": "da69019e4fmshe69d8cb25cf4f1cp1b3321jsn85198d1eaebc",
    accept: "application/json"
  });

  req_api.end(function(res_api) {
    if (res_api.error) throw new Error(res_api.error);

    console.log("token is " + token);

    if (token != -1) {
      mongo.createSummary(
        res_api.body.summary,
        decodedToken.username,
        req.body.type,
        req.body.text
      );
    }

    res.json({ text: res_api.body.summary });
  });
};

const getSumm = async (req, res, next) => {
  const token = req.headers.authorization;

  let decodedToken;

  if (token != "-1") {
    try {
      decodedToken = jwt.verify(token, "javistokenstring1212");
    } catch {
      console.log("ERROR verifying");
    }
  }

  let summaries = await mongo.getSummaries(decodedToken.username);
  res.json(summaries);
};

exports.postSumm = postSumm;
exports.getSumm = getSumm;
