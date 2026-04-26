const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected");
    console.log("Database:", mongoose.connection.name); // ✅ correct
  })
  .catch((err) => {
    console.log("DB connection error", err);
  });