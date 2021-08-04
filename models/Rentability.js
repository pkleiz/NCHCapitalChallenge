const mongoose = require("mongoose");

const { Schema } = mongoose;

const rentabilitySchema = new Schema({
  date: Date,
  NCHMaracanaFia: number,
  IBX100: number,
});

module.exports = mongoose.model("rentability", rentabilitySchema);
