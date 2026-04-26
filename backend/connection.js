
const mongoose = require("mongoose");
require("dotenv").congif();

 mongoose
 .connect(process.env.MONGO_URI)
.then(()=>{
  console.log("connected to the database");

})
    .catch((err)=>{
   console.log("DB connection error"(err));
    }
  );
module.exports = mongoose;