const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const favouriteRoutes = require("./routes/favouriteRoutes");
const path = require("");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/favourite", favouriteRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Starting at ${port}...`);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}
