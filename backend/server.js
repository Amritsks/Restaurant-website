// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

// ---------------------------
// Middleware
// ---------------------------
app.use(cors());
app.use(express.json());
app.use("/api/orders", orderRoutes);

// ---------------------------
// MongoDB Connection
// ---------------------------
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1); // exit if DB connection fails
});

// ---------------------------
// Suggestion Schema + Model
// ---------------------------
const suggestionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  suggestion: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Suggestion = mongoose.model("Suggestion", suggestionSchema);

// ---------------------------
// API Routes
// ---------------------------
app.post("/api/suggestions", async (req, res) => {
  try {
    const { name, email, suggestion } = req.body;

    if (!name || !email || !suggestion) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newSuggestion = new Suggestion({ name, email, suggestion });
    await newSuggestion.save();

    res.status(201).json({ message: "Thank you for your suggestion! 💌" });
  } catch (err) {
    console.error("❌ Error saving suggestion:", err);
    res.status(500).json({ message: "Server error while submitting suggestion." });
  }
});

// ---------------------------
// Serve React Frontend (dist)
// ---------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, "../dist");  
app.use(express.static(distPath));

// ✅ FIX: use regex instead of "/*"
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});


// ---------------------------
// Start Server
// ---------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
