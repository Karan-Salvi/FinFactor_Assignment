const axios = require("axios");
const redis = require("../utils/redisClient");
const logger = require("../utils/logger");
const dotenv = require("dotenv");

dotenv.config();

const API_KEY = process.env.OMDB_API_KEY;
const TTL = parseInt(process.env.CACHE_TTL) || 300;
const MAX_KEYS = parseInt(process.env.MAX_CACHE_KEYS) || 200;

const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

async function enforceMaxCacheSize() {
  const count = await redis.zcard("omdb:timestamps");

  if (count > MAX_KEYS) {
    const excess = count - MAX_KEYS;

    // Fetch oldest keys by timestamp
    const oldKeys = await redis.zrange("omdb:timestamps", 0, excess - 1);

    if (oldKeys.length > 0) {
      await redis.del(...oldKeys);
      await redis.zrem("omdb:timestamps", ...oldKeys);
      logger.warn(
        `Evicted ${oldKeys.length} old cache items (max size reached).`
      );
    }
  }
}

async function fetchFromOMDB(query) {
  const cacheKey = `omdb:${query}`;

  const cached = await redis.get(cacheKey);
  if (cached) {
    logger.info(`CACHE HIT: ${cacheKey}`);
    return JSON.parse(cached);
  }

  logger.info(`CACHE MISS: ${cacheKey}`);

  const response = await axios.get(`${BASE_URL}&${query}`);

  await enforceMaxCacheSize();

  await redis.set(cacheKey, JSON.stringify(response.data), "EX", TTL);

  await redis.zadd("omdb:timestamps", Date.now(), cacheKey);

  return response.data;
}

module.exports = { fetchFromOMDB };
