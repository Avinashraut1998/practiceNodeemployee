const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/database";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to mongodb server");
});

db.on("error", (err) => {
  console.error("mongodb connection error: ", err);
});

db.on("dissconnected", () => {
  console.log("mongodb dissconnected");
});

module.exports = db;
