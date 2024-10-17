const mongoose = require("mongoose");
const url =
  "mongodb+srv://Shreya:dhruv12@shreya.gtjvu.mongodb.net/petadoption?retryWrites=true&w=majority&appName=Shreya";

mongoose
  .connect(url)

  .then((result) => {
    console.log("connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
