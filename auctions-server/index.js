const express = require("express");
const app = express();

app.use(express.json());

const db = require("./models");

//Routres
const auctionRouter = require("./routes/Auctions")
app.use("/auctions", auctionRouter );

db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("Server Running on port 3002");
  });
});
