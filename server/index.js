const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PortfolioRouter = require("./portfolio.router");

mongoose.connect("mongodb://localhost:27017/kapital", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5000;
app.use(PortfolioRouter);

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server started on ${PORT}`);
    }
});
