const express = require("express");
const { fetchFromOMDB } = require("../services/omdbService");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const data = await fetchFromOMDB(`i=${id}&plot=full`);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching movie details" });
  }
});

module.exports = router;
