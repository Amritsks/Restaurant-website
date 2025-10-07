import React, { useState } from "react";

export default function Suggestion() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suggestion: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  // ✅ CORRECTED: Use proper API URL structure
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear message when user starts typing again
    if (message) {
      setMessage("");
      setMessageType("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setMessageType("");

    try {
      console.log("🔄 Submitting to:", `${API_URL}/suggestions`);
      console.log("📤 Data being sent:", formData);

      const response = await fetch(`${API_URL}/suggestions`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Server error: ${response.status}`);
      }

      // ✅ SUCCESS - Data saved to MongoDB
      setMessage(data.message || "Thank you for your suggestion! 💌");
      setMessageType("success");
      setFormData({ name: "", email: "", suggestion: "" });
      
      console.log("✅ Success! Data saved to MongoDB");

    } catch (err) {
      console.error("❌ Error submitting suggestion:", err);
      setMessage(err.message || "Something went wrong. Please try again.");
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          💡 Share Your Suggestions
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Your feedback helps us improve!
        </p>

        {/* Message Display */}
        {message && (
          <div className={`p-4 rounded-lg mb-4 text-center ${
            messageType === "success" 
              ? "bg-green-100 text-green-800 border border-green-300" 
              : "bg-red-100 text-red-800 border border-red-300"
          }`}>
            <span className="font-semibold">
              {messageType === "success" ? "✅ " : "❌ "}
            </span>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Suggestion *
            </label>
            <textarea
              name="suggestion"
              placeholder="Tell us what you think... What can we improve? What did you love?"
              rows="5"
              value={formData.suggestion}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 font-semibold text-lg shadow-md"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving to Database...
              </span>
            ) : (
              "Submit Suggestion 💾"
            )}
          </button>
        </form>

        {/* Database Status Info */}
        {/* <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center justify-center space-x-2 text-blue-800">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">
              <strong>Database Status:</strong> All suggestions are stored in MongoDB
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}