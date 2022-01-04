const express = require("express");
const { truncate } = require("fs/promises");
const mongoose = require("mongoose");
const { allowedNodeEnvironmentFlags } = require("process");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social-network-api",
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("debug", true);
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
