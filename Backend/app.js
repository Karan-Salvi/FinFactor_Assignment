const express = require("express");
const cors = require("cors");
const searchRoutes = require("./routes/search.route.js");
const movieRoutes = require("./routes/movie.route.js");

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URI,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/search", searchRoutes);
app.use("/api/movie", movieRoutes);

module.exports = app;
