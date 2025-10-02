// server.js
const express = require("express");
const app = express();

// Middleware
app.use(express.json()); // allows us to read JSON data

// Test Route
app.get("/", (req, res) => {
  res.send("🚔 Arrest Management System API is running...");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
