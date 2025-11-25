const Redis = require("ioredis");
const dotenv = require("dotenv");
const logger = require("./logger");

dotenv.config();

const redisClient = new Redis(process.env.REDIS_URL);

redisClient.on("connect", () => {
  logger.info("Redis connected successfully");
});

redisClient.on("error", (err) => {
  logger.error("Redis error ", err);
});

module.exports = redisClient;
