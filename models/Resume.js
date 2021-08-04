const mongoose = require("mongoose");

const { Schema } = mongoose;

const resumeSchema = new Schema({
  found: String,
  rentabilityMonth: Number,
  rentabilityYear: Number,
  rentabilityITD: Number,
  netWorth: Number,
});

module.exports = mongoose.model("resume", resumeSchema);
