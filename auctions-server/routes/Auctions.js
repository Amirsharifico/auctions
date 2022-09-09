const express = require("express");
const router = express.Router();
const {Auctions}=require('../models')

router.get("/", async (req, res) => {
 const listOfAuctions = await Auctions.findAll()
 res.json(listOfAuctions);
});

router.post("/", async (req, res) => {
const auctions=req.body;
await Auctions.create(auctions);
res.json(auctions);

});

module.exports = router;
