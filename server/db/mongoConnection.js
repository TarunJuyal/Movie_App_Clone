const mongoose = require("mongoose");

//mongodb+srv://tarun:tarun123@basic.gdldh.mongodb.net/basic
const db = mongoose.connect(
  process.env.MONGO_URI,
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
