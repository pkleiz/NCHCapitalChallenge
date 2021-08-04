const mongoose = require("mongoose");

const { Schema } = mongoose;

const walletSchema = new Schema({
  ticker: String,
  sector: String,
  nav: Number,
});

module.exports = mongoose.model("wallet", walletSchema);
