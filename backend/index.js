const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

require("./connection");

const app = express();
const port = 5000;

const userrouter = require("./router/userrouter");
const petrouter = require("./router/petrouter");
const cartrouter=require("./router/cartrouter");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/user", userrouter);
app.use("/pet", petrouter);
app.use('/cart',cartrouter);

app.get("/", (req, res) => {
  res.send("response from express");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// const express = require("express");
// require("./connection");
// const app = express();
// const cors = require("cors");
// const port = 5000;

// const userrouter = require("./router/userrouter");
// const petrouter = require("./router/petrouter");
// // const petmodel = require('./model/petmodel');
// const dotenv=require("dotenv");
// dotenv.config();

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

// app.use(express.json());
// app.use("/user", userrouter);
// app.use("/pet", petrouter);

// app.get("/", (req, res) => {
//   res.send("response from express");
// });

// app.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// });
