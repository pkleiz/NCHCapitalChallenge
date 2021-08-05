const express = require("express");
const api = require("./backend/routes");
const saveAllToDB = require("./backend/routes/saveAllToDB");
const app = express();

require("dotenv").config();
require("./backend/db/mongoConnection");

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

//middleware
app.use("/api", api);

app.use("/savealltodb", saveAllToDB);

const PORT = process.env.PORT;
app.listen(PORT);
