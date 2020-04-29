var mongo = require("../mongo");
var unirest = require("unirest");
var jwt = require("jsonwebtoken");
var pump = require("pump");
var googleTranslate = require("google-translate")("APIKEY");

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
    "x-rapidapi-key": "APIKEY",
    accept: "application/json"
  });

  let summary;

  req_api.end(function(res_api) {
    if (res_api.error) throw new Error(res_api.error);

    summary = res_api.body.summary;

    if (req.body.language != "en") {
      googleTranslate.translate(summary, req.body.language, function(
        err,
        translation
      ) {
        summary = translation.translatedText + " (translated)";
        if (token != -1) {
          mongo.createSummary(
            summary,
            decodedToken.username,
            req.body.type,
            req.body.text
          );
        }
        res.json({ text: summary });
      });
    } else {
      if (token != -1) {
        mongo.createSummary(
          summary,
          decodedToken.username,
          req.body.type,
          req.body.text
        );
      }
      res.json({ text: summary });
    }
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
