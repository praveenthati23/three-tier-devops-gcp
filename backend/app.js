const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/api/health", async (req, res) => {
  const r = await pool.query("SELECT now()");
  res.json({ status: "ok", time: r.rows[0] });
});

app.listen(3000, () => console.log("Backend running on 3000"));

