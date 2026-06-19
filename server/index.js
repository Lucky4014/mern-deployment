const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Simple Route
app.get("/", (req, res) => {
  res.json({ message: "Backend is Live! ✅", env: process.env.NODE_ENV });
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from MERN Backend!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));