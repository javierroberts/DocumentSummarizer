var MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://javi:temppass@summcluster-cfbgd.mongodb.net/summaries?retryWrites=true&w=majority";

const createSummary = async (summary, userId) => {
  const newSummary = {
    userId: userId,
    summary: summary
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

const getSummaries = async (req, res, next) => {};

exports.createSummary = createSummary;
