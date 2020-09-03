const mongoose = require("mongoose");

const db = mongoose.connect(
  process.env.MONGO_URI ||
    "mongodb+srv://tarun:tarun123@basic.gdldh.mongodb.net/basic",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) {
      console.log("Can't connect to database");
    } else {
      console.log("Connection created...");
    }
  }
);

module.exports = mongoose;
