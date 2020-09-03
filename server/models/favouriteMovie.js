const mongoose = require("../db/mongoConnection");
const Schema = mongoose.Schema;

const favouriteMovieSchema = mongoose.Schema({
  userFrom: { type: Schema.Types.ObjectId, ref: "User" },
  movieId: { type: String },
  movieTitle: { type: String },
  movieImage: { type: String },
  movieRuntime: { type: String },
});

const Favourite = mongoose.model("Favourite", favouriteMovieSchema);
module.exports = { Favourite };
