const express = require("express");
const { fetchFromOMDB } = require("../services/omdbService");

const router = express.Router();

router.get("/", async (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  try {
    const data = await fetchFromOMDB(`s=${title}`);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching search results" });
  }
});

module.exports = router;
