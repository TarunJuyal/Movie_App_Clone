const express = require("express");
const { Favourite } = require("../models/favouriteMovie");
const { auth } = require("../middleware/auth");
const sendMail = require("../utils/mail");
const favouriteRoutes = express.Router();

favouriteRoutes.post("/favouriteNumber", auth, (req, res) => {
  Favourite.find({ movieId: req.body.movieId }).exec((err, favourite) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, FavouriteNumber: favourite.length });
  });
});

favouriteRoutes.post("/favourited", auth, (req, res) => {
  Favourite.find({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, favourite) => {
    if (err) return res.status(400).send(err);
    let result = false;
    if (favourite.length !== 0) {
      result = true;
    }
    res.status(200).json({ success: true, Favourited: result });
  });
});

favouriteRoutes.post("/addToFavourite", auth, (req, res) => {
  const favourite = new Favourite(req.body);
  favourite.save((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true });
  });
});

favouriteRoutes.post("/removeFromFavourite", auth, (req, res) => {
  Favourite.findOneAndDelete({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, doc });
  });
});

favouriteRoutes.post("/getFavouriteMovies", auth, (req, res) => {
  Favourite.find({
    userFrom: req.body.userFrom,
  }).exec((err, favourites) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, favourites });
  });
});

module.exports = favouriteRoutes;
