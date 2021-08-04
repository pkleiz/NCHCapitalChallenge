const mongoose = require("mongoose");

const { Schema } = mongoose;

const rentabilitySchema = new Schema({
  date: Date,
  NCHMaracanaFia: Number,
  IBX100: Number,
});

module.exports = mongoose.model("rentability", rentabilitySchema);
