var MongoClient = require("mongodb").MongoClient;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const url =
  "mongodb+srv://javi:temppass@summcluster-cfbgd.mongodb.net/summaries?retryWrites=true&w=majority";

const createSummary = async (summary, username, type, text) => {
  const newSummary = {
    username: username,
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

const getSummaries = async username => {
  const client = new MongoClient(url);

  let summaries;
  try {
    await client.connect();
    const db = client.db();
    summaries = db
      .collection("summaries")
      .find({ username: username })
      .toArray();
  } catch (error) {
    return -1;
  }

  client.close();

  return summaries;
};

const createUser = async (username, password) => {
  let user = await getUser(username);

  if (user) {
    return -1;
  }

  let encryptedPass;

  encryptedPass = await bcrypt.hash(password, 12);
  const newUser = {
    username: username,
    password: encryptedPass
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("users").insertOne(newUser);
  } catch (error) {
    console.log("Could not create user");
  }

  client.close();

  let token;
  try {
    token = jwt.sign({ username: username }, "javistokenstring1212", {
      expiresIn: "1h"
    });
  } catch (error) {
    console.log("could not sign" + error);
  }
  return token;
};

const getUser = async username => {
  const client = new MongoClient(url);
  let user;
  try {
    await client.connect();
    const db = client.db();
    user = db.collection("users").findOne({ username: username });
  } catch (error) {
    return -1;
  }

  client.close();
  return user;
};

const loginUser = async (username, password) => {
  let user = await getUser(username);

  if (!user) {
    return -1;
  }

  let isValid = await bcrypt.compare(password, user.password);

  if (isValid) {
    let token;
    token = jwt.sign({ username: username }, "javistokenstring1212", {
      expiresIn: "1h"
    });
    return token;
  }

  return -1;
};

exports.createSummary = createSummary;
exports.getSummaries = getSummaries;
exports.createUser = createUser;
exports.getUser = getUser;
exports.loginUser = loginUser;
