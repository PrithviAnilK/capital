const express = require('express');
const Asset = require("./asset.model");

const router = express.Router();


router.get("/portfolio", (req, res) => {
    Asset.find({}, (err, assets) => {
        if (err) {
            console.log(err);
            res.status(404);
            res.json({ error: err });
        } else {
            res.json(assets);
        }
    });
});


router.post("/portfolio", (req, res) => {
    const { ticker, percent, name, notes } = req.body;
    console.log(notes, name);
    Asset.create({ ticker, name, percent, notes }, (err, asset) => {
        if (!err) {
            console.log(asset);
            res.json(asset);
        } else {
            console.log(err);
            res.status(404);
            res.json({ error: err });
        }
    });
});


router.get("/portfolio/:ticker", (req, res) => {
    const { ticker } = req.params;
    Asset.findOne({ ticker }, (err, asset) => {
        if (!err) {
            res.json(asset);
        } else {
            console.log(err);
            res.status(404);
            res.json({ error: err });
        }
    });
});


router.delete("/portfolio/:ticker", (req, res) => {
    const { ticker } = req.params;
    Asset.findOneAndDelete({ ticker }, (err, obj) => {
        if (!err) {
            console.log(`Asset: ${ticker} deleted!`);
            res.send();
        } else {
            console.log(err);
        }
    });
});


module.exports = router;