var MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://javi:temppass@summcluster-cfbgd.mongodb.net/summaries?retryWrites=true&w=majority";

const createSummary = async (summary, userId, type, text) => {
  const newSummary = {
    userId: userId,
    summary: summary,
    type: type,
    text: text
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("summaries").insertOne(newSummary);
  } catch (error) {
    return -1;
  }

  client.close();
};

const getSummaries = async id => {
  const client = new MongoClient(url);

  let summaries;
  try {
    await client.connect();
    const db = client.db();
    summaries = db
      .collection("summaries")
      .find()
      .toArray();
  } catch (error) {
    return -1;
  }

  client.close();

  return summaries;
};

exports.createSummary = createSummary;
exports.getSummaries = getSummaries;
