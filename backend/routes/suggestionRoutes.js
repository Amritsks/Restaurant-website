import express from "express";
import Suggestion from "../models/Suggestion.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, suggestion } = req.body;

    if (!name || !email || !suggestion) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newSuggestion = new Suggestion({ name, email, suggestion });
    await newSuggestion.save();
    
    res.status(201).json({ message: "Thank you for your suggestion! 💌" });
  } catch (err) {
    console.error("Error saving suggestion:", err);
    res.status(500).json({ message: "Server error while submitting suggestion." });
  }
});

export default router;