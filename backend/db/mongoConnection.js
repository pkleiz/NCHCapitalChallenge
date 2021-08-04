const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_UFRL_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Backend Connected to MongoDB");
  }
);
