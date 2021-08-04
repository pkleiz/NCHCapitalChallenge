const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URL_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Backend Connected to MongoDB");
  }
);
