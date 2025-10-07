import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Name is required"],
    trim: true,
    maxlength: [100, "Name cannot exceed 100 characters"]
  },
  email: { 
    type: String, 
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"]
  },
  suggestion: { 
    type: String, 
    required: [true, "Suggestion is required"],
    trim: true,
    maxlength: [1000, "Suggestion cannot exceed 1000 characters"]
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Create indexes for better performance
suggestionSchema.index({ email: 1 });
suggestionSchema.index({ date: -1 });

const Suggestion = mongoose.model("Suggestion", suggestionSchema);

export default Suggestion;