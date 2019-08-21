"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).send("ok");
});

app.post("/", (req, res) => {
    const name = req.body.name;
    const returnName = "Mr." + name;
    res.status(200).json({ name: returnName });
});

module.exports = app;