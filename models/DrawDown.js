const mongoose = require("mongoose");

const { Schema } = mongoose;

const drawDownSchema = new Schema({
  date: Date,
  drawDownFIA: Number,
  drawDownIbovespa: Number,
});

module.exports = mongoose.model("drawDown", drawDownSchema);
