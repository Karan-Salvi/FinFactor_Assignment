# OMDB Movie Explorer - FinFactor Assignment

OMDB Movie Explorer( Movie Love ) is a full-stack web application built using **Node.js + Express**, **Upstash Redis**, **React**, **Tailwind CSS**, and **Custom React Hooks**.
It allows users to search for movies and view detailed movie information using the OMDB API.

## Live Demo

[https://fin-factor-assignment.vercel.app](https://fin-factor-assignment.vercel.app/)

## Screenshots

### Landing Page

<img src="/Frontend/public/screenshots/Landing.png" />

### Search Page

<img src="/Frontend/public/screenshots/Search.png" />

### Movie Details Page

<img src="/Frontend/public/screenshots/MovieDetail.png" />

## Features

### Frontend

- Search movies by title
- Responsive UI using Tailwind CSS
- Movie detail pages
- Custom React hooks for API fetching
- Client-side routing with React Router
- Error and loading handling

### Backend

- REST API built with Express
- OMDB API data fetching
- Redis caching using Upstash
- LRU-like cache eviction for max cache size
- TTL-based cache expiration
- Clean service and routing architecture

## Tech Stack

### Frontend

- React (Vite)
- React Router
- Tailwind CSS
- Axios
- Custom Hooks

### Backend

- Node.js / Express
- ioredis (Upstash)
- Axios
- Winston Logger
- dotenv

## Backend Environment Variables

Create a `.env` file inside the `Backend` directory:

```
OMDB_API_KEY=your_omdb_key_here
PORT=5000

# Upstash Redis URL
REDIS_URL=your_upstash_redis_url

# Cache expiry time (in seconds)
CACHE_TTL=300

# Maximum number of cache entries allowed
MAX_CACHE_KEYS=200
```

## Frontend Environment Variables

Create a `.env` file inside the `Frontend` directory:

```
VITE_BASE_URL=http://localhost:5000
```

## Backend API Endpoints

### 1. Search Movies

```
GET /api/search?title=<title>
```

Example:

```
GET /api/search?title=inception
```

### 2. Movie Details

```
GET /api/movie/:id
```

Example:

```
GET /api/movie/tt1375666
```

## Redis Caching (Upstash)

The backend uses Redis caching to improve performance and reduce OMDB API usage.

Caching features:

- TTL expiration using `EX <seconds>`
- Max cache size enforced using Redis Sorted Sets
- LRU-like eviction for old keys
- Key structure: `omdb:<query>`

### How max-size eviction works:

1. Every stored cache key is added to a sorted set with timestamp:

   ```
   ZADD omdb:timestamps <timestamp> <cacheKey>
   ```

2. Before adding new data:

   - Check total cached keys using:

     ```
     ZCARD omdb:timestamps
     ```

3. If cache exceeds `MAX_CACHE_KEYS`, the oldest keys are removed using:

   ```
   ZRANGE + DEL + ZREM
   ```

This approach is necessary because Upstash does not support `maxmemory` or eviction policies like traditional self-hosted Redis.

## Frontend Hooks

### useFetchMovies

Handles searching movies and manages loading/error state.

### useFetchMovieDetails

Fetches full details for a specific IMDb ID.

This approach keeps components clean and separates business logic into reusable hooks.

## Tailwind CSS

The entire frontend is styled using Tailwind CSS for:

- Rapid UI development
- Responsive design
- Clean utility-based styling

Tailwind is configured to work with Vite and React out of the box.

## Running the Project Locally

### 1. Clone the repository

```
git clone https://github.com/Karan-Salvi/FinFactor_Assignment.git
cd FinFactor_Assignment
```

## Backend Setup

```
cd Backend
npm install
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

## Frontend Setup

```
cd Frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

## API Testing Examples

Search:

```
http://localhost:5000/api/search?title=harry
```

Movie details:

```
http://localhost:5000/api/movie/tt3896198
```

---
