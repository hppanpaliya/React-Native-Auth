const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dating_app_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = mongoose.connection;
