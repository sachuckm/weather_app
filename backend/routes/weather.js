const express = require("express");

const weatherController = require("../controllers/weather");

const router = express.Router();

// GET /feed/posts
router.get("/weather", weatherController.getWeatherData);

// POST /feed/post
router.post("/weather", weatherController.getWeatherData);

module.exports = router;
