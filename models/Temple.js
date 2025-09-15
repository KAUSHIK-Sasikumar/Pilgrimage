const mongoose = require("mongoose");

const templeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  timings: { type: String },
  specialEvents: [String],
  crowdStatus: { type: String, default: "Normal" }, // Normal, High, Very High
}, { timestamps: true });

module.exports = mongoose.model("Temple", templeSchema);
