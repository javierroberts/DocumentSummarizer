var mongo = require("../mongo");
var unirest = require("unirest");

const postSumm = (req, res, next) => {
  var req_api = unirest(
    "GET",
    "https://meaningcloud-summarization-v1.p.rapidapi.com/summarization-1.0"
  );

  const text = req.body.text;
  if (req.body.type == "cp") {
    req_api.query({
      txt: req.body.text,
      sentences: "2"
    });
  } else if (req.body.type == "url") {
    req_api.query({
      url: text,
      sentences: "2"
    });
  } else if (req.body.type == "file") {
    req_api.query({
      file: text,
      sentences: "2"
    });
  }

  req_api.headers({
    "x-rapidapi-host": "meaningcloud-summarization-v1.p.rapidapi.com",
    "x-rapidapi-key": "da69019e4fmshe69d8cb25cf4f1cp1b3321jsn85198d1eaebc",
    accept: "application/json"
  });

  req_api.end(function(res_api) {
    if (res_api.error) throw new Error(res_api.error);

    console.log(req.body.id);
    mongo.createSummary(
      res_api.body.summary,
      req.body.id,
      req.body.type,
      req.body.text
    );

    res.json({ text: res_api.body.summary });
  });
};

const getSumm = async (req, res, next) => {
  let summaries = await mongo.getSummaries(1);
  res.json(summaries);
};

exports.postSumm = postSumm;
exports.getSumm = getSumm;
