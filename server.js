const express = require("express");
const api = require("./backend/routes");
const app = express();

require("dotenv").config();
require("./backend/db/mongoConnection");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

//middleware
app.use("/api", api);

const PORT = process.env.PORT;
app.listen(PORT);
